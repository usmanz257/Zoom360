using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.EntityFrameworkCore
{
    public static class RDFacadeExtensions
    {
        //public static RelationalDataReader ExecuteSqlQuery(this DatabaseFacade databaseFacade, string sql, params object[] parameters)
        //{
        //    var concurrencyDetector = databaseFacade.GetService<IConcurrencyDetector>();

        //    using (concurrencyDetector.EnterCriticalSection())
        //    {
        //        var rawSqlCommand = databaseFacade
        //            .GetService<IRawSqlCommandBuilder>()
        //            .Build(sql, parameters);

        //        return rawSqlCommand
        //            .RelationalCommand
        //            .ExecuteReader(
        //                databaseFacade.GetService<IRelationalConnection>(),
        //                parameterValues: rawSqlCommand.ParameterValues);
        //    }
        //}
    }
}
