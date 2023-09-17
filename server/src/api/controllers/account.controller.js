import Account from "../models/account.model.js"
const add_account = async (req, res) => {
    const account_number = req.body.account_number
    const type = req.body.type
    const customer_NIC = req.body.customer_NIC
    const branch_code = req.body.branch_code
    const balance = req.body.balance

    
    try{
    const account = await Account.createAccount(account_number, type,customer_NIC, branch_code, balance)
      console.log("Account created")
    } catch (err) {
      console.log(err)
      return res.send({ approved: false })
    }
  
    console.log("Add Account function")
  }

const get_account_list = async (req, res) => {
    const NIC = req.body.NIC
    const type = req.body.type
    try{
    const account = await Account.getAccountsByNICAndType(NIC, type)
        console.log("Account list fetched")
        return res.send({ account: account })
    } catch (err) {
        console.log(err)
        return res.send({ approved: false })
    }

    console.log("Get Account list function")
}

const get_account_details = async (req, res) => {
    const account_number = req.body.account_number
    try{
    const account = await Account.getAccountByAccountNumber(account_number)
        console.log("Account details fetched")
        return res.send({ account: account })
    } catch (err) {
        console.log(err)
        return res.send({ approved: false })
    }

    console.log("Get Account details function")
}

export default {add_account, get_account_list, get_account_details}


 