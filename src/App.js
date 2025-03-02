import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import WelcomePage from "./pages/Login/Login";
import Header from './common/Header';
import Master from './pages/Master/Master';
import Company from './pages/Organization Structure/Company/Company';
import Depo from './pages/Organization Structure/Depo/Depo';
import Companydetails from './pages/Organization Structure/Company Details/Companydetails';
import ParentCompany from './pages/Organization Structure/Parent Company/ParentCompany';
import Sidebar from './common/Sidebar';
import Branch from './pages/Organization Structure/Branch/Branch';
import CreateBranch from './pages/Organization Structure/Branch/CreateBranch';
import Plant from './pages/Organization Structure/Plant/Plant';
import CreatePlant from './pages/Organization Structure/Plant/CreatePlant';
import Store from './pages/Organization Structure/Store/Store';
import CreateStore from './pages/Organization Structure/Store/CreateStore';
import SaleChannel from './pages/Sales/Sales Channel/SaleChannel';
import CreateSaleChannel from './pages/Sales/Sales Channel/CreateSaleChannel';
import SaleDivision from './pages/Sales/Sales Division/SaleDivision';
import CreateSaleDivision from './pages/Sales/Sales Division/CreateSaleDivision';
import SaleZone from './pages/Sales/Sales Zone/SaleZone';
import CreateSaleZone from './pages/Sales/Sales Zone/CreateSaleZone';
import SaleRegion from './pages/Sales/Sales Regions/SaleRegion';
import CreateSaleRegion from './pages/Sales/Sales Regions/CreateSaleRegion';
import Countries from './pages/General/Countries/Countries';
import CreateCountry from './pages/General/Countries/CreateCountry';
import States from './pages/General/States/States';
import CreateState from './pages/General/States/CreateState';
import Cities from './pages/General/Cities/Cities';
import CreateCities from './pages/General/Cities/CreateCities';
import Currency from './pages/General/Currency/Currency';
import CreateCurrency from './pages/General/Currency/CreateCurrency';
import CurrencyConversation from './pages/General/Currency Conversation/CurrencyConversation';
import NumberRange from './pages/General/Number Range/NumberRange';
import CustomerNumberRange from './pages/General/Customer Number Range/CustomerNumberRange';
import PendingMasterApprovals from './pages/General/Pending Master Approval/PendingMasterApproval';
import SMSConfiguration from './pages/General/SMS Configuration/SMSConfiguration';
import Roles from './pages/Users and Roles/Sales Channel/Roles';
import CreateRoles from './pages/Users and Roles/Sales Channel/CreateRoles';
import BinMaster from './pages/Organization Structure/Bin Master/BinMaster';
import CreateBinMaster from './pages/Organization Structure/Bin Master/CreateBinMaster';
import SMSIntegrationOfTrans from './pages/General/SMS Integration of Trans/SMSIntegrationofTrans';
import EmailIntegrationforTrans from './pages/General/Email Integration for Trans/EmailIntegrationforTrans';
import MailSettings from './pages/General/Mail Settings/MailSettings';
import MailSettingsCompanyWise from './pages/General/Mail Settings Company Wise/MailSettingsCompanyWise';
import LockedTransationList from './pages/General/Locked Transation List/LockedTransationList';
import InventoryPeriodClosing from './pages/General/Inventory Period Closing/InventoryPeriodClosing';
import AccountPeriodClosing from './pages/General/Account Period Closing/AccountPeriodClosing';
import UnlockUsers from './pages/Users and Roles/Unlock Users/UnlockUsers';
import UpdatePassword from './pages/Users and Roles/Update Password/UpdatePassword';
import BranchAndDivision from './pages/List of Groups/branch and division/BranchAndDivision';
import GstDetails from './pages/Organization Structure/Company Details/GstDetails';
import TdsInfo from './pages/Organization Structure/Company Details/TdsInfo';
import PersonResponsibleDetails from './pages/Organization Structure/Company Details/PersonResponsibleDetails';
import Payroll from './pages/Organization Structure/Company Details/Payroll';
import MultiAddress from './pages/Organization Structure/Company Details/MultiAddress';
import AddressDetails from './pages/Organization Structure/Company Details/AddressDetails';
import TcsInfo from './pages/Organization Structure/Company Details/TcsInfo';
import GstRateDetails from './pages/Organization Structure/Company Details/GstRateDetails';
import VoucherType from './pages/Voucher Type/VoucherType';
import Attendance from './pages/Voucher Type/Attendance/Attendance';
import Contra from './pages/Voucher Type/Contra/Contra';
import CreditNote from './pages/Voucher Type/Credit Note/CreditNote';
import DebitNote from './pages/Voucher Type/Debit Note/DebitNote';
import DeliveryNote from './pages/Voucher Type/Delivery Note/DeliveryNote';
import JobWorkInOrder from './pages/Voucher Type/Job Work In Order/JobWorkInOrder';
import JobWorkOutOrder from './pages/Voucher Type/Job Work Out Order/JobWorkOutOrder';
import Journal from './pages/Voucher Type/Journal/Journal';
import MaterialIn from './pages/Voucher Type/Material In/MaterialIn';
import MaterialOut from './pages/Voucher Type/Material Out/MaterialOut';
import Memorandum from './pages/Voucher Type/Memorandum/Memorandum';
import Payment from './pages/Voucher Type/Payment/Payment';
import PayrollVoucher from './pages/Voucher Type/Payroll/PayrollVoucher';
import PhysicalStock from './pages/Voucher Type/Physical Stock/PhysicalStock';
import Purchase from './pages/Voucher Type/Purchase/Purchase';
import PurchaseOrder from './pages/Voucher Type/Purchase Order/PurchaseOrder';
import Receipt from './pages/Voucher Type/Receipt/Receipt';
import ReceiptNote from './pages/Voucher Type/Receipt Note/ReceiptNote';
import RejectionsIn from './pages/Voucher Type/Rejections In/RejectionsIn';
import RejectionsOut from './pages/Voucher Type/Rejections Out/RejectionsOut';
import ReversingJournal from './pages/Voucher Type/Reversing Journal/ReversingJournal';
import SalesVoucher from './pages/Voucher Type/Sales Voucher/SalesVoucher';
import SalesOrder from './pages/Voucher Type/Sales Order/SalesOrder';
import SalesJournal from './pages/Voucher Type/Sales Journal/SalesJournal';
import EmployeeGroup from './pages/Payroll Masters/Employee Group/EmployeeGroup';
import SalaryDetailsCreation from './pages/Payroll Masters/Employee Group/SalaryDetailsCreation';
import EmployeeCreation from './pages/Payroll Masters/Employee Creation/EmployeeCreation';
import UnitCreation from './pages/Payroll Masters/Unit Creation/UnitCreation';
import AttendanceProductionTypeCreation from './pages/Payroll Masters/Attendance Production Type Creation/AttendanceProductionTypeCreation';
import PayHeadCreation from './pages/Payroll Masters/Employee Group/PayHeadCreation';
import PayHeadCreation1 from './pages/Payroll Masters/Pay Head Creation/PayHeadCreation1';
import GSTClassifications from './pages/Statutory Masters/GST Classifications/GSTClassifications';
import TDSNatureOfPaymentCreation from './pages/Statutory Masters/TDS Nature Of Payment/TDSNatureOfPaymentCreation';
import TCSNatureOfGoodsCreation from './pages/Statutory Masters/TCS Nature Of Goods/TCSNatureOfGoodsCreation';
import LedgerAlteration from './pages/Accounting Master/Party Master/LedgerAlteration';

import GroupsList from "./pages/groups/listofgroups"
import BranchDivisions from "./pages/groups/branch-division"
import CapitalAccount from "./pages/groups/capital-account"
import ReserveSurplus from "./pages/groups/reserves-surplus"
import CurrentAssets from "./pages/groups/current-assests"
import BankAccounts from "./pages/groups/bank-accounts"
import CashinHand from "./pages/groups/cash-in-hand"
import DepositsAssests from "./pages/groups/deposits-asset"
import LoanAdvances from "./pages/groups/loans-advances"
import StockinHand from "./pages/groups/stock-in-hand"
import SundryDebtors from "./pages/groups/sundry-debtors"
import CurrentLiability from "./pages/groups/current-liabilities"
import DutiesTaxes from "./pages/groups/duties-taxes"
import Provision from "./pages/groups/provisions"
import SundryCreditor from "./pages/groups/sundry-creditors"
import DirectExpense from "./pages/groups/direct-expenses"
import DirectIncome from './pages/groups/direct-incomes';
import FixedAsset from './pages/groups/fixed-assets';
import IndirectExpenses from './pages/groups/indirect-expenses';
import IndirectIncome from './pages/groups/indirect-incomes';
import Investment from './pages/groups/investments';
import LoansLiability from './pages/groups/loans-liability';
import BankOD from './pages/groups/bank-od';
import SecuredLoans from './pages/groups/secured-loans';
import UnSecuredLoans from './pages/groups/unsecured-loans';
import MiscExpenses from './pages/groups/misc-expenses';
import PurchaseAccount from './pages/groups/purchase-accounts';
import SalesAccount from './pages/groups/sales-accounts';
import SuspenseAccount from './pages/groups/suspense-account';

import MasterList from './pages/Masters/listofmasters';
import StockGroup from './pages/Masters/stock-groups';
import StockItems from './pages/Masters/group-test';
import ListOfStockCategories from './pages/Masters/list-of-stock-categories';
import Act from './pages/Masters/act1';
import ListOfUnits from './pages/Masters/list-of-units';
import Bag from './pages/Masters/bag';
import Nos from './pages/Masters/nos';
import ListOfStockItem from './pages/Masters/list-of-stock-items';
import GroupTest from './pages/Masters/group-test';
import ItemTest from './pages/Masters/item-test';
import ListOfGodown from './pages/Masters/list-of-godowns';
import MainLocation from './pages/Masters/main-location';

import AssetPage from './pages/Assets Pages/list-of-asset-pages';
import CurrestAssets from './pages/Assets Pages/Current Asstes/CurrestAssets';
import BankAccount from './pages/Assets Pages/Current Asstes/bank-accounts';
import CashInHand from './pages/Assets Pages/Current Asstes/cash-in-hand';
import Cash from './pages/Assets Pages/Current Asstes/cash';
import Dashboard from './pages/Dashboard/Dashboard';

import Deposits from './pages/Assets Pages/Current Asstes/deposits';
import LoanAdvance from './pages/Assets Pages/Current Asstes/loan-advances';
import StockinHands from './pages/Assets Pages/Current Asstes/stock-in-hand';
import SundryDebtor from './pages/Assets Pages/Current Asstes/sundry-debtors';
import Investments from './pages/Assets Pages/Investments/investments';
import MiscExpense from './pages/Assets Pages/Misc. Expenses (Asset)/misc-expenses';
import FixedAssets from './pages/Assets Pages/Fixed Assets/fixed-assets';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <>
      {/* <Header/>
          <Sidebar/>
          <Master/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Organization Structure */}
          <Route path="/company" element={<Company />} />
          <Route path="/depo" element={<Depo />} />
          <Route path="/company-details" element={<Companydetails />} />
          <Route path="/parent-company" element={<ParentCompany />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/create-branch" element={<CreateBranch />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/create-plant" element={<CreatePlant />} />
          <Route path="/store" element={<Store />} />
          <Route path="/create-store" element={<CreateStore />} />
          <Route path="/bin-master" element={<BinMaster />} />
          <Route path="/create-bin-master" element={<CreateBinMaster />} />
          <Route path="/GstDetails" element={<GstDetails />} />
          <Route path="/TdsInfo" element={<TdsInfo />} />
          <Route path="/PersonResponsibleDetails" element={<PersonResponsibleDetails />} />
          <Route path="/Payroll" element={<Payroll />} />
          <Route path="/MultiAddress" element={<MultiAddress />} />
          <Route path="/AddressDetails" element={<AddressDetails />} />
          <Route path="/TcsInfo" element={<TcsInfo />} />
          <Route path="/GstRateDetails" element={<GstRateDetails />} />\
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Sales */}
          <Route path="/sale-channel" element={<SaleChannel />} />
          <Route path="/create-sale-channel" element={<CreateSaleChannel />} />
          <Route path="/sale-division" element={<SaleDivision />} />
          <Route path="/create-sale-division" element={<CreateSaleDivision />} />
          <Route path="/sale-zone" element={<SaleZone />} />
          <Route path="/create-sale-zone" element={<CreateSaleZone />} />
          <Route path="/sale-region" element={<SaleRegion />} />
          <Route path="/create-sale-region" element={<CreateSaleRegion />} />

          {/* General */}
          <Route path="/countries" element={<Countries />} />
          <Route path="/create-country" element={<CreateCountry />} />
          <Route path="/states" element={<States />} />
          <Route path="/create-state" element={<CreateState />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/create-cities" element={<CreateCities />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/create-currency" element={<CreateCurrency />} />
          <Route path="/currency-conversation" element={<CurrencyConversation />} />
          <Route path="/number-range" element={<NumberRange />} />
          <Route path="/customer-number-range" element={<CustomerNumberRange />} />
          <Route path="/pending-master-approvals" element={<PendingMasterApprovals />} />
          <Route path="/sms-configuration" element={<SMSConfiguration />} />
          <Route path="/sms-integration" element={<SMSIntegrationOfTrans />} />
          <Route path="/email-integration" element={<EmailIntegrationforTrans />} />
          <Route path="/mail-settings" element={<MailSettings />} />
          <Route path="/mail-settings-company-wise" element={<MailSettingsCompanyWise />} />
          <Route path="/locked-transaction-list" element={<LockedTransationList />} />
          <Route path="/inventory-period-closing" element={<InventoryPeriodClosing />} />
          <Route path="/account-period-closing" element={<AccountPeriodClosing />} />

          {/* Users and Roles */}
          <Route path="/roles" element={<Roles />} />
          <Route path="/create-roles" element={<CreateRoles />} />
          <Route path="/unlock-users" element={<UnlockUsers />} />
          <Route path="/update-password" element={<UpdatePassword />} />

          {/* Voucher Type */}
          <Route path="/voucher-type" element={<VoucherType />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/contra" element={<Contra />} />
          <Route path="/credit-note" element={<CreditNote />} />
          <Route path="/debit-note" element={<DebitNote />} />
          <Route path="/delivery-note" element={<DeliveryNote />} />
          <Route path="/job-work-in-order" element={<JobWorkInOrder />} />
          <Route path="/job-work-out-order" element={<JobWorkOutOrder />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/material-in" element={<MaterialIn />} />
          <Route path="/material-out" element={<MaterialOut />} />
          <Route path="/memorandum" element={<Memorandum />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payroll-voucher" element={<PayrollVoucher />} />
          <Route path="/physical-stock" element={<PhysicalStock />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchase-order" element={<PurchaseOrder />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/receipt-note" element={<ReceiptNote />} />
          <Route path="/rejections-in" element={<RejectionsIn />} />
          <Route path="/rejections-out" element={<RejectionsOut />} />
          <Route path="/reversing-journal" element={<ReversingJournal />} />
          <Route path="/sales-voucher" element={<SalesVoucher />} />
          <Route path="/sales-order" element={<SalesOrder />} />
          <Route path="/sales-journal" element={<SalesJournal />} />

          {/* Payroll Masters */}
          <Route path="/employee-group" element={<EmployeeGroup />} />
          <Route path="/salary-details" element={<SalaryDetailsCreation />} />
          <Route path="/employee-creation" element={<EmployeeCreation />} />
          <Route path="/unit-creation" element={<UnitCreation />} />
          <Route path="/attendance-production" element={<AttendanceProductionTypeCreation />} />
          <Route path="/pay-head-creation" element={<PayHeadCreation />} />
          <Route path="/pay-head-creation1" element={<PayHeadCreation1 />} />

          {/* Statutory Masters */}
          <Route path="/gst-classifications" element={<GSTClassifications />} />
          <Route path="/tds-nature-payment" element={<TDSNatureOfPaymentCreation />} />
          <Route path="/tcs-nature-goods" element={<TCSNatureOfGoodsCreation />} />

          {/* Accounting Master */}
          <Route path="/LedgerAlteration" element={<LedgerAlteration />} />

          {/* List of Groups */}
          <Route path="/BranchAndDivision" element={<BranchAndDivision />} />




          {/* sumit */}
          <Route path="/group-list" element={<GroupsList />} />
          <Route path="/branch-divisions" element={<BranchDivisions />} />
          <Route path="/capital-account" element={<CapitalAccount />} />
          <Route path="/reserves-surplus" element={<ReserveSurplus />} />
          <Route path="/current-assets" element={<CurrentAssets />} />
          <Route path="/bank-accounts" element={<BankAccounts />} />
          <Route path="/cash-in-hand" element={<CashinHand />} />
          <Route path="/deposits-asset" element={<DepositsAssests />} />
          <Route path="/loans-advances" element={<LoanAdvances />} />
          <Route path="/stock-in-hand" element={<StockinHand />} />
          <Route path="/sundry-debtors" element={<SundryDebtors />} />
          <Route path="/current-liabilities" element={<CurrentLiability />} />
          <Route path="/duties-taxes" element={<DutiesTaxes />} />
          <Route path="/provisions" element={<Provision />} />
          <Route path="/sundry-creditors" element={<SundryCreditor />} />
          <Route path="direct-expenses" element={<DirectExpense />} />
          <Route path="/direct-incomes" element={<DirectIncome />} />
          <Route path="/fixed-assets" element={<FixedAsset />} />
          <Route path="/indirect-expenses" element={<IndirectExpenses />} />
          <Route path="/indirect-incomes" element={<IndirectIncome />} />
          <Route path="/investments" element={<Investment />} />
          <Route path="/loans-liability" element={<LoansLiability />} />
          <Route path="/bank-od" element={<BankOD />} />
          <Route path="/secured-loans" element={<SecuredLoans />} />
          <Route path="/unsecured-loans" element={<UnSecuredLoans />} />
          <Route path="/misc-expenses" element={<MiscExpenses />} />
          <Route path="/purchase-accounts" element={<PurchaseAccount />} />
          <Route path="/sales-accounts" element={<SalesAccount />} />
          <Route path="/suspense-account" element={<SuspenseAccount />} />

          <Route path="/master-list" element={<MasterList />} />
          <Route path="/stock-groups" element={<StockGroup />} />
          <Route path="/list-of-stock-items" element={<ListOfStockItem />} />
          <Route path="/group-test" element={<GroupTest />} />
          <Route path="/item-test" element={<ItemTest />} />
          <Route path="/list-of-stock-categories" element={<ListOfStockCategories />} />
          <Route path="/act1" element={<Act />} />

          <Route path="/list-of-units" element={<ListOfUnits />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/nos" element={<Nos />} />
          <Route path="/list-of-godowns" element={<ListOfGodown />} />
          <Route path="/main-location" element={<MainLocation />} />

          <Route path="/asset-page" element={<AssetPage />} />
          <Route path="/current-assets" element={<CurrestAssets />} />
          <Route path="/bank-accounts" element={<BankAccount />} />
          <Route path="/cash-in-hand" element={<CashInHand />} />
          <Route path="/cash" element={<Cash />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/loan-advances" element={<LoanAdvance />} />
          <Route path="/stock-in-hand" element={<StockinHands />} />
          <Route path="/sundry-debtors" element={<SundryDebtor />} />
          <Route path="/fixed-asset" element={<FixedAssets />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/misc-expenses" element={<MiscExpense />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>

      {/* <Company/> */}
      {/* <Companydetails/> */}
      {/* <GstDetails/> */}
      {/* <TcsInfo/> */}
      {/* <TdsInfo/> */}
      {/* <Payroll/> */}
      {/* <MultiAddress/> */}
      {/* <AddressDetails/> */}
      {/* <GstRateDetails/> */}
      {/* <PersonResponsibleDetails/> */}
      {/* <ParentCompany/> */}
      {/* <Branch/> */}
      {/* <CreateBranch/> */}
      {/* <Plant/> */}
      {/* <CreatePlant/> */}
      {/* <Store/> */}
      {/* <CreateStore/> */}
      {/* <SaleChannel/> */}
      {/* <CreateSaleChannel/> */}
      {/* <SaleDivision/> */}
      {/* <CreateSaleDivision/> */}
      {/* <SaleZone/> */}
      {/* <CreateSaleZone/> */}
      {/* <SaleRegion/> */}
      {/* <CreateSaleRegion/> */}
      {/* <Countries/> */}
      {/* <CreateCountry/> */}
      {/* <States/> */}
      {/* <CreateState/> */}
      {/* <Cities/> */}
      {/* <CreateCities/> */}
      {/* <Currency/> */}
      {/* <CreateCurrency/> */}
      {/* <CurrencyConversation/> */}
      {/* <NumberRange/> */}
      {/* <CustomerNumberRange/> */}
      {/* <PendingMasterApprovals/> */}
      {/* <SMSConfiguration/> */}
      {/* <SMSIntegrationOfTrans/> */}
      {/* <EmailIntegrationforTrans/> */}
      {/* <MailSettings/> */}
      {/* <MailSettingsCompanyWise/> */}
      {/* <LockedTransationList/> */}
      {/* <InventoryPeriodClosing/> */}
      {/* <AccountPeriodClosing/> */}
      {/* <Roles/> */}
      {/* <CreateRoles/> */}
      {/* <BinMaster/> */}
      {/* <CreateBinMaster/> */}
      {/* <UnlockUsers/> */}
      {/* <UpdatePassword/> */}
      {/* <BranchAndDivision/> */}
      {/* <VoucherType/> */}
      {/* <Attendance/> */}
      {/* <Contra/> */}
      {/* <CreditNote/> */}
      {/* <DebitNote/> */}
      {/* <DeliveryNote/> */}
      {/* <JobWorkInOrder/> */}
      {/* <JobWorkOutOrder/> */}
      {/* <Journal/> */}
      {/* <MaterialIn/> */}
      {/* <MaterialOut/> */}
      {/* <Memorandum/> */}
      {/* <Payment/> */}
      {/* <PayrollVoucher/> */}
      {/* <PhysicalStock/> */}
      {/* <Purchase/> */}
      {/* <PurchaseOrder/> */}
      {/* <Receipt/> */}
      {/* <ReceiptNote/> */}
      {/* <RejectionsIn/> */}
      {/* <RejectionsOut/> */}
      {/* <ReversingJournal/> */}
      {/* <SalesVoucher/> */}
      {/* <SalesOrder/> */}
      {/* <SalesJournal/> */}
      {/* <EmployeeGroup/> */}
      {/* <SalaryDetailsCreation/> */}
      {/* <EmployeeCreation/> */}
      {/* <UnitCreation/> */}
      {/* <AttendanceProductionTypeCreation/> */}
      {/* <PayHeadCreation/> */}
      {/* <GSTClassifications/> */}
      {/* <TDSNatureOfPaymentCreation/> */}
      {/* <TCSNatureOfGoodsCreation/> */}
      {/* <LedgerAlteration/> */}
    </>
  );
}

export default App;
