# Blockchain.com React App

A modern, responsive React application that replicates the Blockchain.com website with integrated wagmi v2 and Rainbow Kit wallet connection functionality.

## Features

- 🚀 Modern React application with component-based architecture
- 💼 Rainbow Kit integration for seamless wallet connections
- 🔗 wagmi v2 for Web3 functionality
- 📱 Fully responsive design
- 🎨 Maintains original design patterns and structure
- ⚡ Fast and optimized performance
- 🔐 Support for multiple wallets (MetaMask, Trust Wallet, Coinbase, and more)

## Tech Stack

- **React 18** - Frontend framework
- **Rainbow Kit 2.0** - Wallet connection UI
- **wagmi 2.0** - React hooks for Ethereum
- **viem 2.0** - TypeScript interface for Ethereum
- **React Query** - Data fetching and caching

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- A WalletConnect Project ID (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blockchain-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Get a WalletConnect Project ID (Optional)**
   - Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Create a new project
   - Copy your Project ID
   - Replace `'YOUR_PROJECT_ID'` in `src/index.js` with your actual Project ID

4. **Add your assets**
   Copy all your image assets to the `public` folder:
   - `svgviewer-output.svg`
   - `background.svg`
   - `phone.png`
   - `lappy.png`
   - `patternn.png`
   - All wallet icons
   - Any other images used in your original project

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation with wallet connect
│   ├── Hero.js            # Hero section with connect button
│   ├── CryptoSection.js   # Cryptocurrency cards
│   ├── WalletSection.js   # Wallet features section
│   ├── ExchangeSection.js # Exchange features section
│   ├── ExplorerSection.js # Explorer features section
│   ├── InstitutionalSection.js # Institutional services
│   ├── ZeroToCrypto.js    # Call-to-action section
│   └── Footer.js          # Footer with links
├── App.js                 # Main app component
├── index.js              # Entry point with providers
└── index.css             # Global styles
```

## Wallet Integration

The app uses Rainbow Kit for wallet connections, which provides:

- **Automatic wallet detection**
- **Beautiful connection UI**
- **Support for 100+ wallets**
- **Network switching**
- **Account management**
- **Mobile-optimized experience**

### Supported Wallets

- MetaMask
- Trust Wallet
- Coinbase Wallet
- WalletConnect compatible wallets
- Rainbow
- Ledger
- Trezor
- And many more...

### Supported Networks

- Ethereum Mainnet
- Polygon
- Optimism
- Arbitrum
- Base

## Customization

### Adding More Networks

Edit `src/index.js` and add more chains to the configuration:

```javascript
import { polygon, optimism, arbitrum } from 'wagmi/chains';

const config = getDefaultConfig({
  // ... other config
  chains: [mainnet, polygon, optimism, arbitrum, /* your new chain */],
});
```

### Styling

The app uses the original CSS with responsive enhancements. You can modify styles in:
- `src/index.css` - Global styles
- Individual component files - Component-specific styles

### Adding New Components

1. Create a new component in `src/components/`
2. Import and use it in `src/App.js`
3. Follow the existing patterns for consistency

## Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## Deployment

The app can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Please respect the original Blockchain.com branding and design.

## Support

If you encounter any issues:

1. Check that all dependencies are installed correctly
2. Ensure you have the latest Node.js version
3. Verify your WalletConnect Project ID is correct
4. Check the browser console for any errors

## Next Steps

- Add more Web3 functionality
- Implement transaction features
- Add wallet balance display
- Integrate with DeFi protocols
- Add dark mode support 