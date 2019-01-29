import React from 'react'

import { IconAwesome } from '../components/_free/icon-awesome'
import { Jumbotron } from '../components/jumbotron'
import { GridRow } from '../components/grid-row'
import { GridColumn } from '../components/grid-column'
import { Layout } from '../components/layout'
import { List } from '../components/list'
import { Section } from '../components/section'

const IndexPage = () => (
  <Layout pageTitle="Home">
    <Jumbotron className="d-flex justify-content-center align-items-center text-center" type="large" isFluid={true}>
      <IconAwesome className="text-warning" name="crown" type="solid" size="2x" />

      <h1 className="display-4 mt-2">Welcome to Material</h1>

      <p className="lead mb-0">Start the development with this awesome Bootstrap 4 UI Kit inspired by Material Design.</p>
    </Jumbotron>

    <Section className="features pt-5 pb-8" container="default">
      <GridRow className="justify-content-center text-center">
        <GridColumn md={10} lg={8}>
          <p className="text-center mb-5">Material UI Kit is a Bootstrap UI Kit with a fresh, new design inspired by Google's Material Design. You asked for it, so we built it. It's a great pleasure to introduce to you the material concepts in an easy to use and beautiful set of components.</p>
        </GridColumn>
      </GridRow>

      <GridRow>
        <GridColumn md={4}>
          <IconAwesome className="text-primary" name="puzzle-piece" type="solid" size="2x" />

          <h2 className="features__heading h5 mt-3 mb-3">Incredible Number of Components</h2>

          <p className="features__slug">Every element you need in a product comes built in as a component. All components fit perfectly with each other and can take variations in color.</p>
        </GridColumn>

        <GridColumn md={4}>
          <IconAwesome className="text-cyan" name="object-group" type="regular" size="2x" />

          <h2 className="features__heading h5 mt-3 mb-3">Multi-Purpose Sections</h2>

          <p className="features__slug">Putting together a page has never been easier. From team presentation to pricing options. Customize and built pages within seconds.</p>
        </GridColumn>

        <GridColumn md={4}>
          <IconAwesome className="text-indigo" name="file" type="regular" size="2x" />

          <h2 className="features__heading h5 mt-3 mb-3">Pixel-Perfect Example Pages</h2>

          <p className="features__slug">Do you want to get inspiration or just show something to your clients? Jump-start your development with our pre-built example pages.</p>
        </GridColumn>
      </GridRow>
    </Section>

    <Section container="default" className="pb-8">
      <GridRow>
        <GridColumn md={6}>
          <IconAwesome className="text-blue" name="dice-d20" type="solid" size="2x" />

          <h2 className="h3 mt-3">Basic Components</h2>

          <h3 className="h6 mt-3 mb-3 text-muted">The core elements of your website</h3>

          <p>We re-styled every Bootstrap element to make it resemble Material Design and also fit with each other. All the Bootstrap components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.</p>
        </GridColumn>

        <GridColumn md={6}>
          <img src="" alt="" />
        </GridColumn>
      </GridRow>
    </Section>

    <Section container="default" className="pb-8">
      <GridRow>
        <GridColumn md={6}>
          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6}>
          <IconAwesome className="text-blue-light" name="trello" type="brand" size="2x" />

          <h2 className="h3 mt-3">Unconventional Cards</h2>

          <h3 className="h6 mt-3 mb-3 text-muted">One card for every problem</h3>

          <p>We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the material principles and have a design that stands out.</p>
        </GridColumn>
      </GridRow>
    </Section>

    <Section container="default" className="pb-8">
      <GridRow>
        <GridColumn md={6}>
          <IconAwesome className="text-cyan" name="object-ungroup" type="regular" size="2x" />

          <h2 className="h3 mt-3">Content Areas</h2>

          <h3 className="h6 mt-3 mb-3 text-muted">For areas that need more space</h3>

          <p>If you need elements such as tables, comments, description areas, tabs and many others, we've got you covered. We took into consideration multiple use cases and came up with some specific elements that you will love to use. They're beautiful and easy to use for the end user navigating your website.</p>
        </GridColumn>

        <GridColumn md={6}>
          <img src="" alt="" />
        </GridColumn>
      </GridRow>
    </Section>

    <Section container="default" className="pb-8 text-center">
      <GridRow className="justify-content-center text-center">
        <GridColumn md={10} lg={8}>
          <IconAwesome className="text-cyan" name="object-group" type="regular" size="2x" />

          <h1 className="h3 mt-4">Ready to Use Sections</h1>

          <p className="mt-4 mb-4">Build your page section by section! We have created multiple options for you to put together and customise into pixel perfect pages. From headers to footers, you will be able to choose the best combination for your project.</p>

          <a href="#!" className="btn btn-primary">
            View all sections
          </a>
        </GridColumn>
      </GridRow>
    </Section>

    <div className="gallery gallery--fluid pb-8">
      <div className="container-fluid">
        <GridRow>
          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>

          <GridColumn md={3}>
            <a href="#!">
              <img src="" alt="" />
            </a>
          </GridColumn>
        </GridRow>
      </div>
    </div>

    <Section className="gallery gallery--masonry pb-8" container="default">
      {/*
        * React plugins:
        * https://www.npmjs.com/package/react-masonry-layout
        */}

      <GridRow className="justify-content-center text-center">
        <GridColumn md={10} lg={8}>
          <IconAwesome className="text-indigo" name="file" type="regular" size="2x" />

          <h1 className="h3 mt-4">Example Pages</h1>

          <p className="mt-4 mb-4">The easiest way to get started is to use one of our pre-built example pages. From landing pages to e-commerce or blog pages, you will be able jump start your development. Show your clients a quick prototype and get inspired for your next project!</p>
        </GridColumn>
      </GridRow>

      <GridRow className="justify-content-center mt-3 text-center">
        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">About Us</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Landing Page</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Contact Us</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Blog Post</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Product Page</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Login Page</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Pricing Page</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Signup Page</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Profile Page</h2>

          <img src="" alt="" />
        </GridColumn>

        <GridColumn md={6} lg={4} xl={3}>
          <h2 className="h5">Blog Posts</h2>

          <img src="" alt="" />
        </GridColumn>
      </GridRow>
    </Section>

    <Section className="demo pb-8" container="default">
      <GridRow>
        <GridColumn md={6}>
          <h1 className="h4">Free Demo</h1>

          <p>Do you want to test and see the benefits of this kit before purchasing it? You can give the demo version a try. It features enough basic components for you to get a feel of the design and also test the quality of the code. Get it free on GitHub!</p>

          <a href="#!" className="btn btn-primary">
            View demo on GitHub
          </a>
        </GridColumn>

        <GridColumn md={6}>
          <GridRow>
            <GridColumn md={6}>
              <h2 className="h5">Free Demo</h2>

              <List type="unstyled">
                <li>20 Components</li>
                <li>3 Example Pages</li>
                <li>
                  <IconAwesome name="times-circle" type="regular" /> Unconventional Cards
                </li>
                <li>
                  <IconAwesome name="times-circle" type="regular" /> Sections
                </li>
                <li>
                  <IconAwesome name="times-circle" type="regular" /> Premium Support
                </li>
              </List>
            </GridColumn>

            <GridColumn md={6}>
              <h2 className="h5">PRO Version</h2>

              <List type="unstyled">
                <li>60+ Components</li>
                <li>10 Example Pages</li>
                <li>
                  <IconAwesome name="check-circle" type="regular" /> Unconventional Cards
                </li>
                <li>
                  <IconAwesome name="check-circle" type="regular" /> Sections
                </li>
                <li>
                  <IconAwesome name="check-circle" type="regular" /> Premium Support
                </li>
              </List>
            </GridColumn>
          </GridRow>
        </GridColumn>
      </GridRow>
    </Section>

    <Section className="benefits pb-8" container="default">
      <h1 className="h3 mb-5 text-center">Your work will get much easier</h1>

      <GridRow>
        <GridColumn md={6} lg={3}>
          <IconAwesome className="text-dark" name="th" type="solid" size="2x" />

          <h2 className="benefits__heading h4 mt-3 mb-3">Bootstrap Grid</h2>

          <p className="benefits__slug">Enjoy the perfection of fluid grid system based on 12 columns. Material Kit PRO is built on top of Bootstrap and has all the benefits the framework has to offer.</p>
        </GridColumn>

        <GridColumn md={6} lg={3}>
          <IconAwesome className="text-secondary" name="desktop" type="solid" size="2x" />

          <h2 className="benefits__heading h5 mt-3 mb-3">Fully Responsive</h2>

          <p className="benefits__slug">This Bootstrap kit is built mobile-first and looks amazing on any device. Regardless of the screen size, the website content will naturally fit any resolution.</p>
        </GridColumn>

        <GridColumn md={6} lg={3}>
          <IconAwesome className="text-primary" name="clock" type="regular" size="2x" />

          <h2 className="benefits__heading h5 mt-3 mb-3">Save Time</h2>

          <p className="benefits__slug">Using the Material Kit PRO will save you large amount of time. You don't have to worry about customising the basic Bootstrap design or generating new components.</p>
        </GridColumn>

        <GridColumn md={6} lg={3}>
          <IconAwesome className="text-teal" name="money-bill-alt" type="regular" size="2x" />

          <h2 className="benefits__heading h5 mt-3 mb-3">Save Money</h2>

          <p className="benefits__slug">Creating your design from scratch with dedicated designers is very expensive. Using a kit is the best option to start your development while saving your budget.</p>
        </GridColumn>
      </GridRow>
    </Section>

    <Section className="testimonials pb-8" container="default">
      <GridRow className="justify-content-center text-center">
        <GridColumn md={10} lg={8}>
          <IconAwesome className="text-warning" name="star" type="regular" size="2x" />

          <h1 className="h3 mt-4 mb-4">Trusted by 1.000+ People</h1>

          <p>This UI Kit, has been used and tested by 1,000+ web developers and web designers in over 10.000 Web Projects. This is what some of them say:</p>
        </GridColumn>
      </GridRow>

      <GridRow>
        <GridColumn md={4}>
          <img src="" alt="" className="testimonials__avatar" />

          <h2 className="testimonials__text h5">Sergey Vlademov</h2>

          <p className="testimonials__text">"As soon as I saw this kit, everything else isn't the same anymore, I just can't describe it guys! Thank you for this work!"</p>
        </GridColumn>

        <GridColumn md={4}>
          <img src="" alt="" className="testimonials__avatar" />

          <h2 className="testimonials__text h5">Steven Bauman</h2>

          <p className="testimonials__text">"Great kit! Used this for a client already and he is over the moon. Keep up the good work Creative Tim! 10/10 for design, colors, and the feel of the kit."</p>
        </GridColumn>

        <GridColumn md={4}>
          <img src="" alt="" className="testimonials__avatar" />

          <h2 className="testimonials__text h5">Sunjay Pital</h2>

          <p className="testimonials__text">"Damn Alex!!! This Material UI Kit is fresh AF! Amazing work!"</p>
        </GridColumn>
      </GridRow>
    </Section>

    <Section className="cta pb-4" container="default">
      <div className="text-center">
        <IconAwesome className="text-warning" name="crown" type="solid" size="2x" />

        <h1 className="h3 mt-4 mb-4">Ready to get your Material UI Kit Pro?</h1>
      </div>

      <div className="text-center mb-4">
        <div className="switch">
          <label htmlFor="" className="switch__label">
            Personal license
          </label>

          <input type="checkbox" className="switch__checkbox" />

          <label htmlFor="" className="switch__label">
            Developer license
          </label>
        </div>
      </div>

      {/*this.state.isPersonal ? (
        <p>Good for business projects, multiple websites for clients or for creating themes where your users will be charged for using it. Create multiple websites/apps for multiple clients.</p>
      ) : (
        <p>Good for personal websites, school projects, startups or any other project where your users will not be charged for using it. Create one single website/app for one client.</p>
      )*/}

      <GridRow>
        <GridColumn md={6}>
          <div className="plan plan--lite">
            <h2 className="h4">HTML Package</h2>

            <h3 className="h5">{/*this.state.isPersonal ? '$79' : '$229'*/}</h3>

            <List type="unstyled">
              <li>HTML/CSS/JS Files</li>
              <li>Fully Coded Components</li>
              <li>Responsive Design</li>
              <li>Product Documentation</li>
            </List>
          </div>
        </GridColumn>

        <GridColumn md={6}>
          <div className="plan plan--full">
            <h2 className="h4">HTML + React Package</h2>

            <h3 className="h5">{/*this.state.isPersonal ? '$139' : '¨$599'*/}</h3>

            <List type="unstyled">
              <li>HTML/CSS/JS/React Files</li>
              <li>Fully Coded Components</li>
              <li>Responsive Design</li>
              <li>Product Documentation</li>
              <li><IconAwesome name="plus" type="solid" /> React version</li>
              <li><IconAwesome name="plus" type="solid" /> Gatsbyjs version</li>
            </List>
          </div>
        </GridColumn>
      </GridRow>

      <GridRow className="justify-content-center mt-5 text-center">
        <GridColumn md={10} lg={8}>
          <p className="mb-0">You have Free Unlimited Updates and limited premium support on each package. You also have 30 days to request a refund if you're not happy with your purchase.</p>
        </GridColumn>
      </GridRow>
    </Section>

    <div className="share">
      <div className="container">
        <List type="inline" className="text-center">
          <li className="list-inline-item">
            <a href="#!" className="btn">
              <IconAwesome name="twitter" type="brand" />
            </a>
          </li>

          <li className="list-inline-item">
            <a href="#!" className="btn">
              <IconAwesome name="facebook" type="brand" />
            </a>
          </li>

          <li className="list-inline-item">
            <a href="#!" className="btn">
              <IconAwesome name="pinterest" type="brand" />
            </a>
          </li>
        </List>
      </div>
    </div>
  </Layout>
)

export default IndexPage
