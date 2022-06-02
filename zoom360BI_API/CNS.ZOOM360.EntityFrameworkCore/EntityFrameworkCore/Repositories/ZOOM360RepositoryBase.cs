using CNS.ZOOM360.Shared;
using CNS.ZOOM360.Shared.Repositories;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.EntityFrameworkCore.Repositories
{
   public class ZOOM360RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : class
    {
        //for sql
        protected ZOOM360DbContext _Context;

        public ZOOM360RepositoryBase(ZOOM360DbContext repositoryContext)
        {
            _Context = repositoryContext;
        }

        //for mysql 
        //protected MySqlDbContext _Context;

        //public ZOOM360RepositoryBase(MySqlDbContext repositoryContext)
        //{
        //    _Context = repositoryContext;
        //}


        public virtual DbSet<TEntity> Table => _Context.Set<TEntity>();

        public IQueryable<TEntity> GetAll()
        {
            return GetAllIncluding();
        }

        public IQueryable<TEntity> GetAllIncluding(params Expression<Func<TEntity, object>>[] propertySelectors)
        {
            var query = Table.AsQueryable();

            if (!propertySelectors.IsNullOrEmpty())
            {
                foreach (var propertySelector in propertySelectors)
                {
                    query = query.Include(propertySelector);
                }
            }

            return query;
        }
        public IQueryable<TEntity> FindAll(bool trackChanges) =>
            !trackChanges ?
              _Context.Set<TEntity>()
                .AsNoTracking() :
              _Context.Set<TEntity>();

        public IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression,
        bool trackChanges) =>
            !trackChanges ?
              _Context.Set<TEntity>()
                .Where(expression)
                .AsNoTracking() :
              _Context.Set<TEntity>()
                .Where(expression);

        public void Create(TEntity entity) => _Context.Set<TEntity>().Add(entity);

        public TEntity Update(TEntity entity)
        {
            AttachIfNot(entity);
            _Context.Entry(entity).State = EntityState.Modified;
            return entity;

        }

        public void Delete(TEntity entity) => _Context.Set<TEntity>().Remove(entity);

        public IQueryable<TEntity> ExecuteSP(string query, params object[] parameters)
        {
            var type = _Context.Set<TEntity>().FromSqlRaw(query, parameters);
            return type;
        }

        // <summary>
        /// Get Data From Database
        /// <para>Use it when to retive data through a stored procedure</para>
        /// </summary>
        public   IEnumerable<TEntity> ExecuteQuery(string spQuery, object[] parameters)
        {
            var result =    _Context.Set<TEntity>().FromSqlRaw(spQuery, parameters);
            return result;  
        }
        // <summary>
        /// Get Data From Database
        /// <para>Use it when to retive data through a plain query</para>
        /// </summary>
        public IEnumerable<TEntity> ExecutePlainQuery(string spQuery)
        {
            var result = _Context.Set<TEntity>().FromSqlRaw(spQuery);
            return result;
        }
        /// <summary>
        /// Get Single Data From Database
        /// <para>Use it when to retive single data through a stored procedure</para>
        /// </summary>
        public TEntity ExecuteQuerySingle(string spQuery, object[] parameters)
        {            
                 var result= _Context.Set<TEntity>().FromSqlRaw(spQuery, parameters).FirstOrDefault();
            return result;
        }

        /// <summary>
        /// Insert/Update/Delete Data To Database
        /// <para>Use it when to Insert/Update/Delete data through a stored procedure</para>
        /// </summary>
        ///      public  Task<TEntity> UpdateAsync(TEntity entity) {
      
        public Task<TEntity> UpdateAsync(TEntity entity)
        {

            entity = Update(entity);
            return Task.FromResult(entity);
        }
        protected void AttachIfNot(TEntity entity)
        {
            var entry = _Context.ChangeTracker.Entries().FirstOrDefault(ent => ent.Entity == entity);
            if (entry != null)
            {
                return;
            }

            Table.Attach(entity);
        }
        public string ExecuteCommand(string spQuery, object[] parameters)
        {
            int result = 0;
            var v_Message = "";
            result = _Context.Database.ExecuteSqlRaw(spQuery, parameters);

            var rr = parameters[parameters.Length - 1];
             
            v_Message = ((SqlParameter)rr).Value.ToString();

            return v_Message;
        }


        /// <summary>
        /// Get Dynamic Grid Data
        /// <para>Use it when you want Dynamic Grid Data a stored procedure</para>
        /// </summary>
        public DataTable getDynamicgrid(string sqlQuery, params DbParameter[] parameters)
        {
            DataTable dataTable = new DataTable();
            DbConnection connection = _Context.Database.GetDbConnection();
            DbProviderFactory dbFactory = DbProviderFactories.GetFactory(connection);
            using (var cmd = dbFactory.CreateCommand())
            {
                cmd.Connection = connection;
                cmd.CommandType = CommandType.Text;
                cmd.CommandText = sqlQuery;
                if (parameters != null)
                {
                    foreach (var item in parameters)
                    {
                        cmd.Parameters.Add(item);
                    }
                }
                using (DbDataAdapter adapter = dbFactory.CreateDataAdapter())
                {
                    adapter.SelectCommand = cmd;
                    adapter.Fill(dataTable);
                }
            }
            return dataTable;
        }
        public int Count()
        {
            return _Context.Set<TEntity>().Count();
        }

        public int Count(Expression<Func<TEntity, bool>> predicate)
        {
            return _Context.Set<TEntity>().Where(predicate).Count();
                
        }

        public Task<int> CountAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return Task.FromResult(_Context.Set<TEntity>().Where(predicate).Count());
        }

        public Task<int> CountAsync()
        {
            return Task.FromResult(_Context.Set<TEntity>().Count());
        }

        //public void Delete(TEntity entity)
        //{
        //    _Context.Set<TEntity>().Remove(entity);
        //}

        public void SaveChanges() => _Context.SaveChanges();


    }
}
