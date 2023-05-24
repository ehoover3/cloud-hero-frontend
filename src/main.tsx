
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./assets/stylesheets/main.css";

  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       loader: rootLoader,
//       children: [
//         {
//           path: "team",
//           element: <Team />,
//           loader: teamLoader,
//         },
//       ],
//     },
//   ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
)
