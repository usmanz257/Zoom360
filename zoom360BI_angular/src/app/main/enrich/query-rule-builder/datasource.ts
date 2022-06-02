
/**
 * QueryBuilder datasource
 */
 export let employeeData: Object[] = [{
    'EmployeeID': 1,
    'LastName': 'Davolio',
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'Date': '12/10/2018',
    'Address': '507 - 20th Ave. E.Apt. 2A',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA'
  },
  {
    'EmployeeID': 2,
    'LastName': 'Fuller',
    'FirstName': 'Andrew',
    'Title': 'Vice President',
    'TitleOfCourtesy': 'Dr.',
    'Date': '22/06/2018',
    'Address': '908 W. Capital Way',
    'City': 'Tacoma',
    'Region': 'WA',
    'PostalCode': '98401',
    'Country': 'USA'
  },
  {
    'EmployeeID': 3,
    'LastName': 'Leverling',
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'Date': '12/10/2011',
    'Address': '722 Moss Bay Blvd.',
    'City': 'Kirkland',
    'Region': 'WA',
    'PostalCode': '98033',
    'Country': 'USA'
  },
  {
    'EmployeeID': 4,
    'LastName': 'Peacock',
    'FirstName': 'Margaret',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mrs.',
    'Date': '01/11/2014',
    'Address': '4110 Old Redmond Rd.',
    'City': 'Redmond',
    'Region': 'WA',
    'PostalCode': '98052',
    'Country': 'USA'
  },
  {
    'EmployeeID': 5,
    'LastName': 'Buchanan',
    'FirstName': 'Steven',
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mr.',
    'Date': '12/10/2018',
    'Address': '14 Garrett Hill',
    'City': 'London',
    'Region': null,
    'PostalCode':
    'SW1 8JR',
    'Country': 'UK'
  },
  {
    'EmployeeID': 6,
    'LastName': 'Suyama',
    'FirstName': 'Michael',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'Date': '01/12/2018',
    'Address': 'Coventry House Miner Rd.',
    'City': 'London',
    'Region': null,
    'PostalCode': 'EC2 7JR',
    'Country': 'UK'
  },
  {
    'EmployeeID': 7,
    'LastName': 'King',
    'FirstName': 'Robert',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'Date': '12/12/2011',
    'Address': 'Edgeham Hollow Winchester Way',
    'City': 'London',
    'Region': null,
    'PostalCode': 'RG1 9SP',
    'Country': 'UK'
  },
  {
    'EmployeeID': 8,
    'LastName': 'Callahan',
    'FirstName': 'Laura',
    'Title': 'Inside Sales Coordinator',
    'Date': '12/10/2012',
    'TitleOfCourtesy': 'Ms.',
    'Address': '4726 - 11th Ave. N.E.',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98105',
    'Country': 'USA'
  },
  {
    'EmployeeID': 9,
    'LastName': 'Dodsworth',
    'FirstName': 'Anne',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'Date': '12/03/2018',
    'Address': '7 Houndstooth Rd.',
    'City': 'London',
    'Region': null,
    'PostalCode': 'WG2 7LT',
    'Country': 'UK'
  }];
  export let expenseData: Object[]  = [{
      'UniqueId': 'T100001',
      'Category': 'Food',
      'PaymentMode': 'Credit Card',
      'TransactionType': 'Expense',
      'Description': 'Boiled peanuts',
      'Amount': '7',
      'MonthShort': 'Jun',
      'MonthFull': 'June, 2017',
      'FormattedDate': '06/01/2017 09:12 AM'
    }, {
      'UniqueId': 'T100024',
      'Category': 'Food',
      'PaymentMode': 'Cash',
      'TransactionType': 'Expense',
      'Description': 'Peanuts in Coke',
      'Amount': '8',
      'MonthShort': 'Jun',
      'MonthFull': 'June, 2017',
      'FormattedDate': '06/04/2017 02:43 PM'
    }, {
      'UniqueId': 'T100025',
      'Category': 'Food',
      'PaymentMode': 'Cash',
      'TransactionType': 'Expense',
      'Description': 'Palmetto Cheese, Mint julep',
      'Amount': '11',
      'MonthShort': 'Jun',
      'MonthFull': 'June, 2017',
      'FormattedDate': '06/04/2017 08:35 PM'
    }, {
      'UniqueId': 'T100026',
      'Category': 'Transportation',
      'PaymentMode': 'Debit Card',
      'TransactionType': 'Expense',
      'Description': 'Cars and trucks, used',
      'Amount': '9',
      'MonthShort': 'Jun',
      'MonthFull': 'June, 2017',
      'FormattedDate': '06/04/2017 10:25 AM'
    }, {
      'UniqueId': 'T100027',
      'Category': 'Transportation',
      'PaymentMode': 'Debit Card',
      'TransactionType': 'Expense',
      'Description': 'Public and other transportation',
      'Amount': '8',
      'MonthShort': 'Jun',
      'MonthFull': 'June, 2017',
      'FormattedDate': '06/04/2017 03:55 PM'
    }, {
      'UniqueId': 'T100028',
      'Category': 'Shopping',
      'PaymentMode': 'Cash',
      'TransactionType': 'Expense',
      'Description': 'Household things & Utilities',
      'Amount': '160',
      'MonthShort': 'Jun',
      'MonthFull': 'June, 2017',
      'FormattedDate': '06/04/2017 10:22 AM'
    },
  {
      'UniqueId': 'T101284',
      'Category': 'Extra income',
      'PaymentMode': 'Cash',
      'TransactionType': 'Income',
      'Description': 'Income from Sale',
      'Amount': '110',
      'MonthShort': 'Nov',
      'MonthFull': 'November, 2017',
      'FormattedDate': '11/30/2017 02:42 PM'
    }];
    export let hardwareData: Object[]  = [
      {
          'TaskID': 1,
          'Name': 'Lenovo Yoga',
          'Category': 'Laptop',
          'SerialNo': 'CB27932009',
          'InvoiceNo': 'INV-2878',
          'DOP': '04/10/2018',
          'WEO': '05/01/2021',
          'Status': 'Assigned',
          'AssignedTo': 'John Doe',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 2,
          'Name': 'Acer Aspire',
          'Category': 'Others',
          'SerialNo': 'CB35728290',
          'InvoiceNo': 'INV-3456',
          'DOP': '02/12/2018',
          'WEO': '03/01/2023',
          'Status': 'In-repair',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 3,
          'Name': 'Apple MacBook',
          'Category': 'Laptop',
          'SerialNo': 'CB35628728',
          'InvoiceNo': 'INV-2763',
          'DOP': '04/10/2018',
          'WEO': '04/03/2021',
          'Status': 'In-repair',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 4,
          'Name': 'Lenovo ThinkPad',
          'Category': 'Laptop',
          'SerialNo': 'CB56209872',
          'InvoiceNo': 'INV-2980',
          'DOP': '03/09/2018',
          'WEO': '05/12/2021',
          'Status': 'Pending',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 5,
          'Name': 'Dell Inspiron',
          'Category': 'Laptop',
          'SerialNo': 'CB56289036',
          'InvoiceNo': 'INV-3782',
          'DOP': '01/10/2018',
          'WEO': '04/01/2021',
          'Status': 'Assigned',
          'AssignedTo': 'David Anto',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 6,
          'Name': 'HP Pavilion',
          'Category': 'Laptop',
          'SerialNo': 'CB56289305',
          'InvoiceNo': 'INV-2712',
          'DOP': '04/10/2018',
          'WEO': '05/01/2021',
          'Status': 'Assigned',
          'AssignedTo': 'Mary Saveley',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 7,
          'Name': 'Asus ZenBook',
          'Category': 'Laptop',
          'SerialNo': 'CB25637891',
          'InvoiceNo': 'INV-0984',
          'DOP': '06/16/2018',
          'WEO': '09/01/2021',
          'Status': 'Pending',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 8,
          'Name': 'HP EliteBook',
          'Category': 'Laptop',
          'SerialNo': 'CB27819726',
          'InvoiceNo': 'INV-2561',
          'DOP': '02/19/2018',
          'WEO': '05/21/2021',
          'Status': 'Ordered',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 9,
          'Name': 'Apple MacBook Air',
          'Category': 'Laptop',
          'SerialNo': 'CB05262880',
          'InvoiceNo': 'INV-8970',
          'DOP': '02/12/2018',
          'WEO': '03/01/2023',
          'Status': 'Pending',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      },
      {
          'TaskID': 10,
          'Name': 'Apple iPad Air',
          'Category': 'Tablet',
          'SerialNo': 'CB45262777',
          'InvoiceNo': 'INV-4555',
          'DOP': '04/10/2018',
          'WEO': '05/01/2021',
          'Status': 'Pending',
          'AssignedTo': '',
          'Note': 'Remarks are noted'
      }
  ];
  