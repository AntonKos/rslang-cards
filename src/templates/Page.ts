import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

const Page = () => `
    ${Menu()}
    <div class="container">
      <div class="top">
        ${Header()}
        <main class="main wrapper">
        </main>
      </div>
      ${Footer()}
    </div>
`;

export default Page;
