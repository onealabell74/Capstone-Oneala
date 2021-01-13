export default () => `
<main>
<h>Subscribe to my Newsletter</h>


<form id="myform" action="https://formspree.io/f/myyblynn" method="POST">
<label for="name">Name:</label>
<input type="text" name="name" id="name" placeholder="Full Name">

<label for="email">Email:</label>
<input type="email" name="email" id="email" placeholder="you@somewhere.com">

<label for="Phone">Phone:</label>
<input type="tel" name="phone" id="phone">

<div>
  <label for="msg">Enter your message:</label>
  <textarea name="msg" id="msg" cols="50" rows="5"></textarea>
</div>

<div>
    <p>What's this message about?</p>
    <div>
      <input type="radio" name="subject" value="professional" id="pro" checked>
      <label for="pro">New Information</label>
    </div>
    <div>
      <input type="radio" name="subject" value="personal" id="personal">
      <label for="personal">Personal message</label>
    </div>
    <div>
      <input type="radio" name="subject" value="other">
      <label>Dialysis Cookbook</label>
    </div>
  </div>

<input type="checkbox" name="optIn" value="trusting" id="news" checked>
<label for="news">Subscribe to my newsletter/Cookbook!</label>

<div>
  <label for="marketing">How did you hear about me?</label>
  <select name="marketing">
    <optgroup label="Online">
      <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
      <option value="github">Online Portfolio (GitHub)</option>
      <option value="search">Search Engine</option>
      <option value="email">Email</option>
    </optgroup>
    <optgroup label="In-Person">
      <option value="networking">We met at a networking event</option>
      <option value="referral">Personal referral</option>
      <option value="random">We met somewhere else</option>
    </optgroup>
    <option value="other">Other</option>
  </select>
</div>

<input type="submit" value="Submit">
</form>

</main>

`;
