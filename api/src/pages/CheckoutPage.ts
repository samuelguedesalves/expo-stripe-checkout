const CheckoutPage = (stripePublicKey: string, sessionId: string) => {
  return (
    `<html>
      <body>
        <!-- Load Stripe.js on your website. -->
        <script src="https://js.stripe.com/v3"></script>
        <h1>Redirecting you to Checkout...</h1>
        <div id="error-message"></div>
        <script>
          (function () {
            var stripe = Stripe('${stripePublicKey}');
            window.onload = function () {
              stripe.redirectToCheckout({
                sessionId: '${sessionId}'
              })
              .then(function (result) {
                if (result.error) {
                  var displayError = document.getElementById('error-message');
                  displayError.textContent = result.error.message;
                }
              });
            };
          })();
        </script>
      </body>
    </html>`
  );
}

export default CheckoutPage;