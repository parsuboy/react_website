import React from 'react'

function Cart() {
    return (
        <div>
            {/* Header */}

            <header className="fixed-top">
        <div className="container-fluid">
          <div className="col-md-2 col-xs-2 col-sm-2 logo">	
            <a href="/"><img src="img/logo.jpeg" /></a>
          </div>
          <div className="col-md-3 col-xs-3 col-sm-3">
            <form className="search-form" role="search">
              <div className="form-group md-form mt-0 pt-1 waves-light">
                <i className="fas fa-search" aria-hidden="true" /><input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </div>
          <div className="col-md-7 col-xs-7 col-sm-7">
            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item">
                <a className="nav-link how-to-join"> <span className="clearfix d-sm-inline-block">How To Join</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"> <i className="fa fa-shopping-cart" /> </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" /></a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <p>I have an Abilis account.</p>
                  <a className="dropdown-item" href="#">How To Join</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>

            {/* Main */}

            <div className="main-content cart">
        <div className="container">
          <main>
            <div className="col-md-9">
              <div className="basket">
                <div className="basket-module">
                  <label htmlFor="promo-code">Enter a promotional code</label>
                  <input id="promo-code" type="text" name="promo-code" maxLength={5} className="promo-code-field" />
                  <button className="promo-code-cta">Apply</button>
                </div>
                <div className="basket-product">
                  <div className="item-heading">
                    <div className="product-image col-md-2 col-xs-2">
                      image
                    </div>
                    <div className="product-image col-md-3 col-xs-3">
                      Name
                    </div>
                    <div className="product-image col-md-2 col-xs-2">
                      Price
                    </div>
                    <div className="product-image col-md-3 col-xs-3">
                      Quality
                    </div>
                    <div className="product-image col-md-2 col-xs-2">
                      Total
                    </div>
                  </div>
                  <div className="items">
                    <div className="product-image col-md-2 col-xs-2">
                      <img src="http://placehold.it/120x166" alt="Placholder Image 2" className="product-frame" />
                    </div>
                    <div className="product-details col-md-3 col-xs-3">
                      <h5><strong><span className="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h5>
                      <p><strong>Navy, Size 18</strong></p>
                      <p>Product Code - 232321939</p>
                    </div>
                  </div>
                  <div className="price col-md-2 col-xs-2">26.00</div>
                  <div className="quantity col-md-3 col-xs-3">
                    <form>
                      <div className="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                      <input type="number" id="number" defaultValue={0} />
                      <div className="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                    </form>
                  </div>
                  <div className="subtotal col-md-2 col-xs-2">104.00</div>
                  <div className="remove">
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <aside>
                <div className="summary">
                  <div className="summary-total-items"><span className="total-items" /><h4> Your Order</h4></div>
                  <div className="summary-subtotal">
                    <div className="subtotal-title">Subtotal</div>
                    <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                  </div>
                  <div className="summary-shipping">
                    <div className="shipping-title">Shipping</div>
                    <div className="shipping-value final-value" id="basket-subtotal">30.00</div>
                  </div>
                  <div className="summary-total">
                    <div className="total-title">Total</div>
                    <div className="total-value final-value" id="basket-total">160.00</div>
                  </div>
                  <div className="summary-checkout">
                    <button className="checkout-cta">Proceed to Checkout</button>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>

            {/* Footer */}

            <footer>
        <div className="row top-footer">
          <div className="container">
            <div className="col-md-5" style={{verticalAlign: 'middle'}}>
              <div className="sc-kfGgVZ ewBkLQ"><div className="sc-esjQYD cDJIof">Paiement sécurisé par Datatrans</div>
                <div className="sc-kIPQKe hNJTwe">La protection de vos données est la priorité d'Abilis.</div>
              </div>
            </div>
            <div className="col-md-7">
              <img src="img/payment-card.png" />
            </div>
          </div>
        </div>
        <div className="middle-footer">
          <div className="row">
            <div className="container logo">
              <img src="img/logo.jpeg" />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-3 col-xs-6">
                <h6>Know us</h6>
                <ul>
                  <li><a href="/">About Dr.Farma</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Dr.Farma</h6>
                <ul>
                  <li><a href="/">News</a></li>
                  <li><a href="/">How to join</a></li>
                  <li><a href="/">Advantages</a></li>
                  <li><a href="/">Faq</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Legal Notice</h6>
                <ul>
                  <li><a href="/">Term and Conditions</a></li>
                  <li><a href="/">Confidentiality and data protection</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6">
                <h6>Health professionals</h6>
                <ul>
                  <li><a href="/">To become partner</a></li>
                  <li><a href="/">To log in</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="third-sec-footer">
          <div className="container">
            <div className="col-md-7 col-xs-12 subscriber">
              <p>Stay informed with our Dr.Farma newsletter <a href="/" className="register">Register</a></p>
            </div>
            <div className="col-md-5 col-xs-12 social-sec">
              <p>Follow Us </p>
              <span><ul className="social-icon">
                  <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="/"><i className="fab fa-twitter" /></a></li>
                  <li><a href="/"><i className="fab fa-instagram" /></a></li>
                  <li><a href="/"><i className="fab fa-linkedin-in" /></a></li>
                </ul></span></div>	
          </div>
        </div>
        <div className="last-sec">
          <div className="container">
            <b>The security of your data is guaranteed.</b>
            <p>Protecting your personal data is one of Abilis' priorities. The identification and authentication system put in place, based on the use of an electronic identifier certified by the Confederation, guarantees that only you can access your sensitive data. Located in Switzerland, the secure datacenters that host this data benefit from certifications attesting to compliance with legislation on IT security and data protection.</p>
          </div>
          <ul className="fot-logo-sec">
            <li><a href="/"><img src="img/fot-logo-1.png" /></a></li>
            <li><a href="/"><img src="img/fot-logo-2.png" /></a></li>
            <li><a href="/"><img src="img/fot-logo-3.png" /></a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>© drro.ro </p>
        </div>
      </footer>

        </div>
    )
}

export default Cart
