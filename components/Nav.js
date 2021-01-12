export default () => `
<nav id="navbar">
    <i class="fas fa-bars"></i>
      <ul class="hidden--mobilenav-links">
        <li><a href="/" data-navigo>Home</a></li>
        <li><a href="About" data-navigo>About</a></li>
        <li><a href="Contact" data-navigo>Contact</a></li>
         <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Types of Dialysis Treatments</a>
        <div class="dropdown-content">
          <a href="CenterAndHome" data-navigo> Center/Home</a>
          <a href="Peritoneal" data-navigo>Peritoneal Dialysis</a>
          <a href="Crrt" data-navigo>Continuous Renal Replacement</a>
        </div>
        </li>
        <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Types of Dialysis Access</a>
        <div class="dropdown-content">
          <a href="Cvc" data-navigo>Central Venous Catheter(CVC)</a>
          <a href="Avf" data-navigo>Arteriovenous Fistula(AVF)</a>
          <a href="Avg" data-navigo>Arteriovenous Graft(AVG)</a>
          <a href="Pcvc" data-navigo>Peritoneal Dialysis Catheter(PD)</a>
        </div>
        </li>
        <li><a href="Careteam" data-navigo>Care Team</a></li>
      </ul>
</nav>
`;
