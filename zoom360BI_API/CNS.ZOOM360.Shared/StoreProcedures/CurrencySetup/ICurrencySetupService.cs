using CNS.ZOOM360.Entities.StoreProcedures.CurrencySetup;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CNS.ZOOM360.Shared.StoreProcedures.CurrencySetup
{
    public interface ICurrencySetupService
    {
        Task<string> SaveCurrencySetup(CurrencySetupModel currencySetupModel);

        Task<List<CurrencySetupModel>> GetCurrencySetup(string userId, string workSpaceId, string CLIENT_ID, string currenceyTypeSign);
    }
}
