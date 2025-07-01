import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Mark & Hana Smith',
      lastName: '',
      mobileNumber: '489-178-0042',
      email: 'smithmark@Mhunlimited.com',
      jointNames: '',
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 169600.0,
      saving_balance_usd: 320410.0,
      has_saving_account: true
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: '001',
        dateTime: 'November 23 2013',
        description: 'Wire Transfer from Hana Smith',
        status: 'Success',
        amount_usd: 200000.0,
        account_no: '****2323'
      },
      {
        transaction_id: '002',
        dateTime: 'March 23 2013',
        description: 'Check Deposit by Mark Smith',
        status: 'Success',
        amount_usd: 500000.0,
        account_no: '****4532'
      },
      {
        transaction_id: '003',
        dateTime: 'April 4 2011',
        description: 'Credit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0,
        account_no: '****2319'
      },
      {
        transaction_id: '004',
        dateTime: 'February 20 2009',
        description: 'Credit from Hana Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****8491'
      },
      {
        transaction_id: '005',
        dateTime: 'February 2 2009',
        description: 'Credit from Mark Smith ',
        status: 'Success',
        amount_usd: 1000000.0,
        account_no: '****0933'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Lynn Bella Stone',
      mobileNumber: '********',
      email: 'l*@outlook.com',
      jointNames: '',
      profileImg: '',
      username: 'lynn_bella23',
      password: 'LbStone!942'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 9000.0,
      saving_balance_usd: 0.0,
      has_saving_account: false
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 20, 2024 : 9:16 AM',
        description: 'Withdrawal - XXXXXX2356',
        status: 'Failed',
        amount_usd: 300.0,
      },
      {
        dateTime: 'December 19, 2024 : 12:45 PM',
        description: 'Transfer from Playboy - XXXXXX3479',
        status: 'Success',
        amount_usd: 9000.0,
      },
    ]
  },
];
