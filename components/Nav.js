export default () => `
<nav id="navbar">
    <i class="fas fa-bars"></i>
      <ul class="hidden--mobilenav-links">
        <li><a href="#">Home</a></li>
        <li><a href="./About.html">About</a></li>
        <li><a href="./Contact.html">Contact</a></li>
        <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Types of Dialysis Treatments</a>
          <div class="dropdown-content">
            <a href="./CenterAndHome.html"> Center/Home</a>
            <a href="./Peritoneal.html">Peritoneal Dialysis</a>
            <a href="./ContinousRenalReplacement.html">Continuous Renal Replacement</a>
          </div>
        </li>
        <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">Types of Dialysis Access</a>
          <div class="dropdown-content">
            <a href="./CentralVenousCatheter.html">Central Venous Catheter(CVC)</a>
            <a href="./avf.html">Arteriovenous Fistula(AVF)</a>
            <a href="./ArteriovenousGraft.html">Arteriovenous Graft(AVG)</a>
            <a href="./PeritonealDialysisCatheter.html">Peritoneal Dialysis Catheter(PD)</a>
          </div>
        </li>
        <li><a href="./Careteam.html">Care Team</a></li>
      </ul>
</nav>
`;
