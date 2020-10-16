# Python Mini Project

This is a private repository of Python mini project for Progate.

## How-to use

This project consist of 3 files:

1. atm_card.py
2. customer.py
3. atm_program.py

The first is **atm_card.py** which supposed to be a "superclass" for customer.py, so that Progate learner will have some insight on how "inheritance" concept work, but it's not done yet. Next is **customer.py** that contain some information held by a bank customer and all the feature listed in the project outline before. And then there's **atm_program.py** , which will read the customer input and behave accordingly.

Try to run the program from **atm_program.py** for testing. And make sure the computer have Python version 3 installed.

## Work in Progress (Based on project outline)

- [x] Cek Pin (Check Pin)
- [x] Ganti Pin (Change Pin)
- [x] Cek Saldo (Balance)
- [x] Debet (Withdraw)
- [x] Simpan (Deposit)
- [x] Keluar (Exit/Cancel)
- [x] Cetak Resi (Print receipt)

## Changelog

#### 2020-09-09

#### Naming refactor (class name / function name / parameter / variable) from Indonesia to English.

###### File Name
- kartuATM.py => atm_card.py
- nasabah.py => customer.py
- programATM => atm_program.py

###### Class Name
- KartuATM => ATMCard
- Nasabah => Customer

###### Function Name
- cekId() => checkId()
- cekPin() => checkPin()
- cekSaldo() => checkBalance()
- debet() => withdrawBalance()
- simpan() => depositBalance()

###### Variable Name
- percobaan => trial
- pilihmenu => selectmenu
- cek_debet => verify_withdraw
- cek_simpan => verify_deposit
- cek_pinbaru => verify_newpin
- cek_pin => verify_pin 
- pin_baru => updated_pin

###### Parameter Name
- pinAwal => defaultPin
- saldoAwal => defaultBalance
- pinAwal => custPin
- saldoAwal => custBalance
- saldo => balance
