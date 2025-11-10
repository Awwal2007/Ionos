import React, { useState } from 'react'
import { Header } from '../components/Header'
import https from '../assets/https.avif'
import { IoCheckmarkCircle } from "react-icons/io5";
import section1Img from '../assets/section1-illustration.svg'
import { IoMdInformationCircleOutline } from "react-icons/io";

export const Home = () => {
    const [toggleActive, setToggleActive] = useState(true);
    const [packageActive, setPackageActive] = useState(true);
return (
    <div>
        <Header />
        <section className="hero-section">
            <div className="container">
                <div className='left-side'>
                    <div className='top'>
                        <p>SSL Certificates</p>
                        <h1>Be secure. Buy an SSL certificate.</h1>
                    </div>
                    <div className="middle">
                        <div>
                            <IoCheckmarkCircle />
                            <p>Secures data transfers</p>
                        </div>
                        <div>
                            <IoCheckmarkCircle />
                            <p>Avoids browser warnings</p>
                        </div>
                        <div>
                            <IoCheckmarkCircle />
                            <p>Improves your Google ranking</p>
                        </div>
                    </div>
                    <div className='bottom'>
                        <a href='#'>See packages</a>
                    </div>
                </div>
                <div className='hero-img-container'>
                    <div>
                        <img src={https} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="section1">
            <h2>Increase your customers' trust with SSL/TLS</h2>
            <div className='container'>
                <div className='left'>
                    <div>
                        <h3>What SSL does</h3>
                        <p>An SSL certificate encrypts all information transmitted to and from your website, ensuring it is protected from third parties attempting to access it.</p>
                    </div>
                    <div>
                        <h3>Why you need SSL</h3>
                        <p>Browsers like Google Chrome mark pages without SSL encryption as not secure. This can have a negative effect on the trustworthiness of your website. If you have an SSL certificate, your site's URL will start with the prefix "https" and a padlock icon will be displayed in the browser bar, showing your visitors your site is secure and their data is safe. Pages that are protected with SSL receive better search engine rankings and are more likely to be trusted by visitors.</p>
                    </div>
                    <div>
                        <h3>SSL vs TLS </h3>
                        <p>TLS is an updated, more secure version of SSL. When you buy an SSL certificate from IONOS, you get the latest TLS technology. We still refer to them as SSL certificates because it's the more common term.</p>
                    </div>
                </div>
                <div className='right'>
                    <img src={section1Img} alt="section 1 illustration" />
                </div>
            </div>
        </section>

        <section className="section2">
            <h2>Package overview</h2>
            <p>Choose between Standard SSL (protect a domain, without subdomains) and Wildcard SSL (protect a domain, incl. all subdomains)</p>
            <div className="package-section">
                <div className='toggle-buttons'>
                    <button onClick={() => { setToggleActive(true); setPackageActive(true);}} className={toggleActive ? 'active' : ''}>Standard SSL</button>
                    <button onClick={() => {
                        setToggleActive(false); 
                        setPackageActive(false);
                        }} className={!toggleActive ? 'active' : ''}>Wildcard SSL</button>
                </div>
                {packageActive ?
                    
                    <div className="packages-container">
                        <div className='package'>
                            <div className='top'>
                                <h3>SSL Starter</h3>
                                <hr />
                            </div>
                            <div className='middle'>
                                <div className='only'>Only</div>
                                <div className='price'>
                                    
                                    <span className='number'><sup className='dollar-sign'>£</sup>3330</span>
                                    
                                    <div className='year'> 
                                        <div>/year</div>
                                        <div>excl.VAT</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <a className='add-to-cart-btn' href="#">Add to cart</a>
                            </div>
                            <div className='bottom'>
                                <div>Instant SSL DV</div>
                                <div>Protection for one domain name</div>
                                <h3>Domain Validated <IoMdInformationCircleOutline /> </h3>
                                <div>Up to 256-bit encryption</div>
                                <div>£500,000 loss excess amount</div>
                                <h3>Padlock display</h3>
                                <div>Easy to activate on your website</div>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='top'>
                                <h3>SSL Business</h3>
                                <hr />
                            </div>
                            <div style={{marginBottom: "10px"}} className='middle'>
                                <div className='save'>
                                    Save 17%
                                </div>
                                <div style={{textDecoration: "line-through"}} className='only'>60/year</div>
                                <div className='price'>
                                    
                                    <span className='number'><sup className='dollar-sign'>£</sup>3750</span>
                                    
                                    <div className='year'> 
                                        <div>/year</div>                                  
                                    </div>
                                    
                                </div>
                                <div className='for-one-year'>
                                    <div>for 1 year</div>
                                    <div>excl.VAT</div>
                                </div>
                            </div>
                            <div>
                                <a className='add-to-cart-btn' href="#">Add to cart</a>
                            </div>
                            <div className='bottom'>
                                <div>Instant SSL OV</div>
                                <div>Protection for one domain name</div>
                                <h3>Organisation Validation <IoMdInformationCircleOutline /> </h3>
                                <div>Up to 256-bit encryption</div>
                                <div>£1,250,000 loss excess</div>
                                <h3>Padlock display</h3>
                                <div>Protection against phishing</div>
                                <div>Display the trustworthiness of your business</div>
                            </div>
                        </div>

                        <div className='package'>
                            <div className='top'>
                                <h3>SSL Premium</h3>
                                <hr />
                            </div>
                            <div className='middle'>
                                <div className='only'>Only</div>
                                <div className='price'>
                                    
                                    <span className='number'><sup className='dollar-sign'>£</sup>4200</span>
                                    
                                    <div className='year'> 
                                        <div>/2year</div>
                                        <div>excl.VAT</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <a className='add-to-cart-btn' href="#">Add to cart</a>
                            </div>
                            <div className='bottom'>
                                <div>Instant SSL EV</div>
                                <div>Protection for one domain name</div>
                                <h3>Extended Validation <IoMdInformationCircleOutline /> </h3>
                                <div>Up to 256-bit encryption</div>
                                <div>£1,750,000 loss excess amount</div>
                                <h3>Padlock display</h3>
                                <div>Protection against phishing</div>
                                <div>Display the trustworthiness of your business</div>
                                <div>Highest level of authentication</div>
                            </div>
                        </div>
                    </div>
                    
                    :

                    <div style={{gap: "40px"}} className='packages-container'>
                        <div className='package'>
                            <div className='top'>
                                <h3>SSL Starter Wildcard</h3>
                                <hr />
                            </div>
                            <div className='middle'>
                                <div className='only'>Only</div>
                                <div className='price'>
                                    
                                    <span className='number'><sup className='dollar-sign'>£</sup>2665</span>
                                    
                                    <div className='year'> 
                                        <div>/year</div>
                                        <div>excl.VAT</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <a className='add-to-cart-btn' href="#">Add to cart</a>
                            </div>
                            <div className='bottom'>
                                <div>Instant SSL DV Wildcard</div>
                                <div>Protect a domain, excluding all of its subdomains</div>
                                <h3>Domain Validated <IoMdInformationCircleOutline /> </h3>
                                <div>Up to 256-bit encryption</div>
                                <div>£500,000 loss excess amount</div>
                                <h3>Padlock display</h3>
                                <div>Easy to activate on your website</div>
                            </div>
                        </div>
                        <div className='package'>
                            <div className='top'>
                                <h3>SSL Business Wildcard</h3>
                                <hr />
                            </div>
                            <div className='middle'>
                                <div className='only'>Only</div>
                                <div className='price'>
                                    
                                    <span className='number'><sup className='dollar-sign'>£</sup>4665</span>
                                    
                                    <div className='year'> 
                                        <div>/3year</div>
                                        <div>excl.VAT</div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <a className='add-to-cart-btn' href="#">Add to cart</a>
                            </div>
                            <div className='bottom'>
                                <div>Instant SSL OV Wildcard</div>
                                <div>Protect a domain, including all of its subdomains</div>
                                <h3>Organisation Validated <IoMdInformationCircleOutline /> </h3>
                                <div>Up to 256-bit encryption</div>
                                <div>£1,250,000 loss excess amount</div>
                                <h3>Padlock display</h3>
                                <div>Protection against phishing</div>
                                <div>Display the trustworthiness of your business</div>
                            </div>
                        </div>
                        
                    </div>

                }
            </div>
            <div style={{textAlign: "center"}}> All prices exclude VAT charged at 20%. VAT may be subject to change depending on your country of residence. Terms and conditions apply.</div>
        </section>
    </div>
  )
}
