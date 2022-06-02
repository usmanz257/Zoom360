using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.Repositories
{
    public interface IMySqlRepositoryBase<TEntity>
    {
        IQueryable<TEntity> GetAll();
        IQueryable<TEntity> FindAll(bool trackChanges);
        IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> expression,
        bool trackChanges);
        void Create(TEntity entity);
        TEntity Update(TEntity entity);
        void Delete(TEntity entity);

        Task<TEntity> UpdateAsync(TEntity entity);
        IEnumerable<TEntity> ExecuteQuery(string spQuery, object[] parameters);
        IEnumerable<TEntity> ExecutePlainQuery(string spQuery);
        TEntity ExecuteQuerySingle(string spQuery, object[] parameters);
        string ExecuteCommand(string spQuery, object[] parameters);
        DataTable getDynamicgrid(string sqlQuery, params DbParameter[] parameters);
        void SaveChanges();
    }
}
