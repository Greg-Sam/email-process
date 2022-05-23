// const tournamentArray = [6404, 6405, 6356, 6357]

// const createContent = (user) => {

// let userTournaments = []
// for (let i = 0; i < tournamentArray.length; i++) {
//   const tournament = tournamentArray[i];
//   // console.log(user.tournaments)
//   const played = user.tournaments.filter(search => search.tournamentNo === tournament);

//   // console.log(played)
//   if(played.length !== 0){
//   userTournaments.push(played[0])
//   }
// }
// if(userTournaments.length !== 0) { console.log(user.userName, userTournaments)}
// }


const createContent = (user) => {

  let subjectLine = `Check Out Your Beach Pick'em Results`

  let emailContent =
  `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<head
  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">

  <meta name="viewport" content="width=device-width"
    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"
    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
  <title
    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
    email template</title>



</head>

<body bgcolor="black"
  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: none;height: 100%;width: 100% !important;">

  <!-- HEADER -->
  <table class="head-wrap" bgcolor="black"
    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;width: 100%;">
    <tr
      style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      <td
        style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      </td>
      <td class="header container"
        style="margin: 0 auto !important;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;display: block !important;max-width: 600px !important;clear: both !important;">

        <div class="content"
          style="margin: 0 auto;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;max-width: 600px;display: block;">
          <table bgcolor="black"
            style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;width: 100%;">
            <tr
              style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
              <td class="container"
                style="margin: 0 auto !important;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;display: block !important;max-width: 600px !important;clear: both !important;">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fleet-hawk-348421.appspot.com/o/email%20banner%20220523.png?alt=media&token=ad4ca6cd-e4f0-4c1e-a384-4bea56d7ff9f"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;max-width: 100%;">

              </td>

            </tr>
          </table>
        </div>

      </td>
      <td
        style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      </td>
    </tr>
  </table><!-- /HEADER -->


  <!-- BODY -->
  <table class="body-wrap"
    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;width: 100%;">
    <tr
      style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      <td
        style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      </td>
      <td class="container" bgcolor="#FFFFFF"
        style="margin: 0 auto !important;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;display: block !important;max-width: 600px !important;clear: both !important;">
        <div class="content"
          style="margin: 0 auto;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;max-width: 600px;display: block;">
          <table
            style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;width: 100%;">
            <tr
              style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
              <td
                style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
                <h3
                  style="margin: 0;padding: 0;font-family: &quot;HelveticaNeue-Light&quot;, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;line-height: 1.1;margin-bottom: 15px;color: #000;font-weight: 500;font-size: 27px;">
                  Hi ${user.userName},</h3>
                <p class="lead"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 17px;line-height: 1.6;">
                  Last week there were four tournaments on the Pro Beach Tour. It was the busiest week yet
                  for Volleyball World's new global tour. It was also a great chance to show the world your beach
                  volleyball smarts by playing Beach Pick'em. </p>

                <h4
                  style="margin: 0;padding: 0;font-family: &quot;HelveticaNeue-Light&quot;, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;line-height: 1.1;margin-bottom: 15px;color: #000;font-weight: 500;font-size: 23px;">
                  Congratulations to last week's winners!</h4>

                <!-- A Real Hero (and a real human being) -->
                <p
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 14px;line-height: 1.6;">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/fleet-hawk-348421.appspot.com/o/winners220523.gif?alt=media&token=160e112e-a758-4316-9ce3-ffaefb072fbb"
                    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;max-width: 100%;">
                </p>
                <!-- /hero -->

                <!-- Callout Panel -->
                <!-- <p class="callout">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. <a
                    href="#">Do it Now! &raquo;</a> -->
                <!-- </p> -->
                <!-- /Callout Panel -->

                <h3
                  style="margin: 0;padding: 0;font-family: &quot;HelveticaNeue-Light&quot;, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;line-height: 1.1;margin-bottom: 15px;color: #000;font-weight: 500;font-size: 27px;">
                  Your Results</h3>
                <p class="lead"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 17px;line-height: 1.6;">
                  Login to <a href="https://beachpickem.beachvolleyblog.net"
                    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;color: #2BA6CB;">Beach
                    Pick'em</a> to see how
                  you did. After you login, click on the "View Past Tournaments" button. You can see how your picks
                  performed, the winner's picks, the community's picks and the leaderboard for each tournament. </p>
                <p class="lead"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 17px;line-height: 1.6;">
                  I've updated the <a href="https://beachpickem.beachvolleyblog.net/#/leaderboard"
                    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;color: #2BA6CB;">leaderboard</a>,
                  too. You can now
                  filter results by month, tournament type and gender of the tournament. Have a look at what your Beach
                  Pick'em strengths and weakenesses are.</p>
                <h3
                  style="margin: 0;padding: 0;font-family: &quot;HelveticaNeue-Light&quot;, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;Lucida Grande&quot;, sans-serif;line-height: 1.1;margin-bottom: 15px;color: #000;font-weight: 500;font-size: 27px;">
                  Play the Elite 16 in Ostrava next week!</h3>
                <p class="lead"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 17px;line-height: 1.6;">
                  All the biggest stars are set to play in in the Czech Republic this week. This is the
                  second ever Elite 16 tournament. In Rosarito Cherif & Ahmed and Katja & Raisa overcame the field to
                  pick up the victory. Who do you think will win in Ostrava?</p>
                <p class="lead"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 17px;line-height: 1.6;">
                  Beach Pick'em players BeachMilovice & GP were the winners of the Rosarito Elite 16
                  event. Make sure you make your picks, so you can be in a fight for the crown. </p>
                <p class="lead"
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 17px;line-height: 1.6;">
                  Don't forget there is also a Future level tournament in Cervia, Italy this week,
                  too. Make sure to enter that tournament while you are online to make your Elite 16 picks. </p>
                <br
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
                <br
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
              </td>
            </tr>
          </table>
        </div>

      </td>
      <td
        style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      </td>
    </tr>
  </table><!-- /BODY -->

  <!-- FOOTER -->
  <table class="footer-wrap"
    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;width: 100%;clear: both !important;">
    <tr
      style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      <td
        style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      </td>
      <td class="container"
        style="margin: 0 auto !important;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;display: block !important;max-width: 600px !important;clear: both !important;">

        <!-- content -->
        <div class="content"
          style="margin: 0 auto;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;max-width: 600px;display: block;">
          <table
            style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;width: 100%;">
            <tr
              style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
              <td align="center"
                style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
                <p
                  style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;margin-bottom: 10px;font-weight: normal;font-size: 14px;line-height: 1.6;">
                  <a href="#"
                    style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;color: #2BA6CB;">
                    <unsubscribe
                      style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
                      Unsubscribe</unsubscribe>
                  </a>
                </p>
              </td>
            </tr>
          </table>
        </div><!-- /content -->

      </td>
      <td
        style="margin: 0;padding: 0;font-family: &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;">
      </td>
    </tr>
  </table><!-- /FOOTER -->

</body>`

let content = {emailContent: emailContent,
subjectLine: subjectLine}
return content
}

exports.createContent = createContent