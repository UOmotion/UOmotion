<!DOCTYPE html>
<html>
  <head>
    <title>UO Motion — Features</title>
    <style>
      body {
        background-color: white;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      header {
        background-color: #8f001a;
        color: #8f001a;
        padding: 10px 20px;
      }

      h1, h2 {
        color: #8f001a;
      }

      button {
        background-color: #8f001a;     
        color: white;                
        border: none;               
        border-radius: 8px;          
        padding: 10px 20px;           
        font-size: 16px;              
        cursor: pointer;              
        font-family: "Poppins", sans-serif;
        transition: background 0.3s, box-shadow 0.3s;  
        box-shadow: 0 4px 0 #8f001a; 
      }

      button:hover {
        background-color: #4a000f;  
        box-shadow: 0 4px 0 #4a000f; 
      }

      td form {
        margin: 0 5px;
      }

   
      .feature-item {
        opacity: 0; 
        transform: translateY(40px); 
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .feature-item.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .features {
        display: flex;              
        justify-content: center;      
        gap: 80px;                    
        text-align: center;          
        margin-top: 40px;
      }

      .feature-item img {
        width: 80px;                  
        height: 100px;
      }

      .feature-item p {
        font-size: 18px;
        margin-top: 10px;
        font-weight: bold;
        color: #8f001a;
      }

 
      .features-title {
        display: inline-block;
        background-color: #8f001a;
        color: white;
        padding: 15px 30px;
        border-radius: 12px;
        font-size: 28px;
        opacity: 0;
        transform: translateX(-80px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .features-title.visible {
        opacity: 1;
        transform: translateX(0);
      }

    </style>
  </head>

  <body>
    <header>
      <table width="100%" cellspacing="8" cellpadding="4">
        <tr>
          <td>
            <a href="Homepage.html">
              <img src="UOMotionlogo.png" alt="UO Motion logo" height="90">
            </a>
          </td>
          <td align="right">
            <table cellspacing="10" cellpadding="0">
              <tr>
                <td>
                  <form action="Homepage.html">
                    <button type="submit">UOMotion</button>
                  </form>
                </td>
                <td>
                  <form action="Features.html">
                    <button type="submit">Features</button>
                  </form>
                </td>
                <td>
                  <form action="Pricing.html">
                    <button type="submit">Pricing</button>
                  </form>
                </td>
                <td>
                  <form action="Team.html">
                    <button type="submit">About Us</button>
                  </form>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </header>

    <table height="200" cellspacing="0" cellpadding="0">
      <tr><td></td></tr>
    </table>

    <center>
    
      <h2 class="features-title">Explore Our Features</h2>

      <p>Track your walking distance, compete on leaderboards, and earn prizes as you stay active on campus.</p>

      <div class="features">
        <div class="feature-item">
          <img src="Footprints.png" alt="Footprints">
          <p>Tracks Walking</p>
        </div>
        <div class="feature-item">
          <img src="LeaderBoard.png" alt="Leaderboard">
          <p>Competitive Leaderboard</p>
        </div>
        <div class="feature-item">
          <img src="Prizes.png" alt="Prizes">
          <p>Prizes</p>
        </div>
      </div>

      <table cellspacing="30" cellpadding="0">
        <tr>
          <td>
            <form action="Download.html">
              <button type="submit">
                <b><font size="5">&nbsp;&nbsp;&nbsp;DOWNLOAD&nbsp;APP&nbsp;&nbsp;&nbsp;</font></b>
              </button>
            </form>
          </td>
          <td>
            <form action="Pricing.html">
              <button type="submit">
                <b><font size="5">&nbsp;&nbsp;&nbsp;PRICING&nbsp;PAGE&nbsp;&nbsp;&nbsp;</font></b>
              </button>
            </form>
          </td>
        </tr>
      </table>
    </center>

    <script>
      window.addEventListener("load", function() {

        const features = document.querySelectorAll(".feature-item");
        const title = document.querySelector(".features-title");

      
        setTimeout(() => {
          title.classList.add("visible");
        }, 200);

     
        features.forEach((feature, index) => {
          setTimeout(() => {
            feature.classList.add("visible");
          }, 600 + index * 300);
        });
      });
    </script>
  </body>
</html>