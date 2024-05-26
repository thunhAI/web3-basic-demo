const Web3 = require('web3');

document.getElementById('connect-button').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const balanceWei = await web3.eth.getBalance(account);
      const balance = web3.utils.fromWei(balanceWei, 'ether');

      document.getElementById('account').innerText = account;
      document.getElementById('balance').innerText = balance;
      document.getElementById('account-info').style.display = 'block';
    } catch (error) {
      console.error("User denied account access or error occurred: ", error);
    }
  } else {
    alert('MetaMask not detected. Please install MetaMask.');
  }
});
