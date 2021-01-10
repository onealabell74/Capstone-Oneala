export default () => `
<nav id="navbar">
    <i class="fas fa-bars"></i>
      <ul class="hidden--mobilenav-links">
        <li><a href="/" data-navigo>Home</a></li>
        <li><a href="./About.html" data-navigo>About</a></li>
        <li><a href="./Contact.html" data-navigo>Contact</a></li>
        <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Types of Dialysis Treatments</a>
          <div class="dropdown-content">
            <a href="./CenterAndHome.html" data-navigo> Center/Home</a>
            <a href="./Peritoneal.html" data-navigo>Peritoneal Dialysis</a>
            <a href="./ContinousRenalReplacement.html" data-navigo>Continuous Renal Replacement</a>
          </div>
        </li>
        <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Types of Dialysis Access</a>
          <div class="dropdown-content">
            <a href="./CentralVenousCatheter.html" data-navigo>Central Venous Catheter(CVC)</a>
            <a href="./avf.html" data-navigo>Arteriovenous Fistula(AVF)</a>
            <a href="./ArteriovenousGraft.html" data-navigo>Arteriovenous Graft(AVG)</a>
            <a href="./PeritonealDialysisCatheter.html" data-navigo>Peritoneal Dialysis Catheter(PD)</a>
          </div>
        </li>
        <li><a href="./Careteam.html" data-navigo>Care Team</a></li>
      </ul>
</nav>
`;
