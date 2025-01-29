import React from "react";
import "../assets/Portfolio.css";
export const Portfolio = () => {
  return (
    <div className="container">
      <div className="col">
        <h1>Melbourne Leading Suppliers</h1>
        <div className="row portfolio-card">
          <div className="col">
            <img
              src="https://picsum.photos/id/400/1200/630"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col">
            <p>
              Securewrap is a well-renowned Packaging materials Supplier
              established in 2020. Our company was founded to close the gap
              between industry needs and packaging equipment suppliers. By
              choosing Securewrap, you cut out the middleman and get the
              products you need, right when you need them. We guarantee the best
              customer service from our team of experts and we will make sure to
              provide top-quality products at unbeatable prices. Contact us
              today to learn more about what we can do for you.
              <ul>
                <li>Pallet wrapping</li>
                <li>A4 adhesive paper</li>
                <li>Packing peanuts</li>
                <li>Zip lock bags</li>
                <li>Padded bubble envelopes</li>
                <li>Masking Tapes</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Trust the experts in all things packaging</h4>
            <p>
              Using our website, it’s easy to place an order for any supplies
              you require. Our team is committed to processing all orders as
              quickly as possible and can ship products all over the country.
              However, you can also pick your order up directly from our
              Melbourne warehouse if you are based locally and wish to forgo the
              cost of shipping. Be sure to head over to our blog for Stanley
              Packaging updates, industry news, packaging tips and more.
              Otherwise, browse our extensive range online and order whatever
              you need in just a few clicks.
            </p>

            <h4>Why source packaging supplies from us?</h4>
            <p>
              We are a family-owned business that takes pride in offering high
              quality at competitive prices. What’s more, our understanding of
              our clients’ needs drives us to provide a simple, affordable and
              hassle-free experience when it comes to sourcing packaging
              supplies in Melbourne, Sydney, Brisbane, Perth, Adelaide and
              anywhere else in Australia. If you find a competitor offers a
              lower price on an item we stock, ask us about a price match; if
              it’s the same brand, we’ll happily beat it by 5%! Speak with our
              staff for terms and conditions.
            </p>
          </div>
          <div className="col">
            <img
              src="https://picsum.photos/id/400/1200/631"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
