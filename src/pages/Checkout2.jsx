import React from 'react'
import logo from '../assets/ionos-logo-blue.png'
import promoImg from '../assets/promo-img.svg'
import supportImg from '../assets/support.svg'
import paymentImg from '../assets/payment method.svg'
import secureImg from '../assets/secure checkout.svg'

import masterImg from '../assets/mastercard.svg'
import visaImg from '../assets/visa.svg'
import americanImg from '../assets/american-express.svg'
import paypalImg from '../assets/paypal.svg'
import directImg from '../assets/direct-debit.svg'
import googlepayImg from '../assets/google-pay.svg'
import googlepayPngImg from '../assets/google-pay.png'
import applepayImg from '../assets/apple-pay.svg'
import payImg from '../assets/pay.svg'

import { RiQuestionnaireLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { GoChevronDown } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlCallEnd } from 'react-icons/sl';

export const Checkout2 = () => {
  return (
    <div className='checkout'>
        <div className="checkout-header">
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <RiQuestionnaireLine />
            </div>

            <div>
                <FaHome />
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/more-than.png" alt="more-than"/>
                <GiCheckMark fill='green' />
                <p>Your selection</p>
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/more-than.png" alt="more-than"/>
                <p>Your basket</p>
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/more-than.png" alt="more-than"/>
                <p>Customer details</p>
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/more-than.png" alt="more-than"/>
                <p>Order review</p>
                <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/more-than.png" alt="more-than"/>
                <p>Payment</p>
            </div>

        </div>
        <div className='checkout-page'>
            <div className='top'>
                <h2>Your shopping basket</h2>
                <div>Millions of entrepreneurs trust their growth to IONOS.</div>
            </div>
            <div className='middle'>
                <div className='left'>
                    <div className='ssl-section'>
                        <div>
                            <h3>SSL Business</h3>
                            <div style={{display: "flex"}}>                                
                                <h3> <sub style={{fontWeight: "400", fontSize: "15px", textDecoration: "line-through"}}>£3780</sub> £3750</h3>
                                
                            </div>                            
                        </div>
                        <div>£3750/year for 1 year <br /> Then only £2780/year</div>
                        <div style={{gap: "10px"}}>
                            <div className='contract-details' style={{textDecoration: "underline"}} >Contract Details <GoChevronDown /> </div>
                            <RiDeleteBin6Line className='deleteBtn' />
                        </div>
                        <hr />
                        <div>
                            <a href="#">Add more domains</a>
                        </div>
                    </div>
                    <div className='promo-code'>
                        <div className='promo'>
                            <div>
                                <img src={promoImg} alt="promo image" />
                            </div>
                            <a href=''>
                                Add a promo code
                            </a>
                        </div>
                        <div className='promo-bottom'>
                            <div className='container'>
                                <div>
                                    <img src={supportImg} alt="support image" />
                                </div>
                                <h3>Need help?</h3>
                                <div>We're available 24/7.</div>
                                <div style={{display: "flex"}}>
                                    <SlCallEnd />
                                    <div>+443333365691</div>
                                </div>
                            </div>

                            <div className='container'>
                                <div>
                                    <img src={secureImg} alt="support image" />
                                </div>
                                <h3>Secure checkout</h3>
                                <div>We secure your transaction with SSL encryption to protect your data.</div>
                            </div>

                            <div className='container'>
                                <div>
                                    <img src={paymentImg} alt="support image" />
                                </div>
                                <h3>Payment methods</h3>
                                <div className="grid-container">
                                    <div  className='grid-item'><img src={masterImg} alt="" /></div>
                                    <div className='grid-item'><img src={visaImg} alt="" /></div>
                                    <div className='grid-item'><img src={americanImg} alt="" /></div>
                                    <div className='grid-item'><img src={paypalImg} alt="" /></div>
                                    <div className='grid-item'><img src={directImg} alt="" /></div>
                                    <div className='grid-item'><img src={applepayImg} alt="" /></div>
                                    <div className='grid-item'><img src={googlepayImg} alt="" /></div>
                                    <div className='grid-item'><img src={payImg} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <h3>Your order</h3>
                    <div>1 item</div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h2>Total excl. VAT</h2>
                        <h2>£3750</h2>
                    </div>
                    <div style={{textAlign:"right"}}>
                        (20% VAT £750)
                    </div>
                    <div className="grid-container">
                        <div className="grid-item"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgwIiBoZWlnaHQ9IjMzOS4zNDUiIHZpZXdCb3g9IjAgMCAzMzguNjY3IDg5Ljc4NSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MzYuODk4IC0yMS43NzkpIj48cGF0aCBjbGlwLXBhdGg9Im5vbmUiIGQ9Ik0tODI4LjYwNCAzOS43MzRjLS42OTcgMC0xLjI4OS41MDYtMS4zOTggMS4xOTVsLTguMDY4IDUxLjE2NWExLjMxIDEuMzEgMCAwIDAgMS4yOTQgMS41MTNoOS41NjhjLjY5NiAwIDEuMjg5LS41MDcgMS4zOTgtMS4xOTVsMi4zNy0xNS4wMjVjLjEwOC0uNjg4LjcwMS0xLjE5NSAxLjM5OC0xLjE5NWg4LjY5OWMxMC4xNjQgMCAxOC43OTItNy40MTYgMjAuMzY4LTE3LjQ2NSAxLjU4OS0xMC4xMzQtNi4zMjgtMTguOTcxLTE3LjU0OS0xOC45OTN6bTkuMzAxIDExLjQyMmg2Ljk2YzUuNzMgMCA3LjU5NiAzLjM4MSA3LjAwNiA3LjEyLS41OSAzLjc0Ny0zLjQ4OCA2LjUwNy05LjAzMSA2LjUwN2gtNy4wODR6bTQ1Ljc4OCAzLjQ3OGMtMi40MTYuMDA5LTUuMTk2LjUwNC04LjMxNyAxLjgwNC03LjE1OSAyLjk4NC0xMC41OTcgOS4xNTEtMTIuMDU3IDEzLjY0NyAwIDAtNC42NDcgMTMuNzE3IDUuODUyIDIxLjI1MyAwIDAgOS43MzcgNy4yNTUgMjAuNjk4LS40NDdsLS4xODkgMS4yMDNhMS4zMSAxLjMxIDAgMCAwIDEuMjkyIDEuNTEzaDkuMDgzYy42OTcgMCAxLjI4OS0uNTA3IDEuMzk4LTEuMTk1bDUuNTI1LTM1LjAzOGExLjMxIDEuMzEgMCAwIDAtMS4yOTItMS41MTVoLTkuMDgzYy0uNjk3IDAtMS4yOS41MDctMS4zOTggMS4xOTVsLS4yOTcgMS44ODZzLTMuOTY3LTQuMzMzLTExLjIxNi00LjMwNnptLjI5NyAxMS4wNjdjMS4wNDMgMCAxLjk5Ny4xNDQgMi44NTMuNDE5IDMuOTE5IDEuMjU4IDYuMTQxIDUuMDIzIDUuNDk4IDkuMTA0LS43OTMgNS4wMjUtNC45MTQgOC43MjUtMTAuMTk5IDguNzI1LTEuMDQyIDAtMS45OTYtLjE0My0yLjg1My0uNDE4LTMuOTE4LTEuMjU4LTYuMTU0LTUuMDIzLTUuNTExLTkuMTA0Ljc5My01LjAyNSA0LjkyNy04LjcyNyAxMC4yMTItOC43Mjd6IiBmaWxsPSIjMDAzMDg3Ii8+PHBhdGggY2xpcC1wYXRoPSJub25lIiBkPSJNLTY5Ny44MDQgMzkuNzM0Yy0uNjk3IDAtMS4yODkuNTA2LTEuMzk4IDEuMTk1bC04LjA2OCA1MS4xNjVhMS4zMSAxLjMxIDAgMCAwIDEuMjk0IDEuNTEzaDkuNTY4Yy42OTYgMCAxLjI4OS0uNTA3IDEuMzk4LTEuMTk1bDIuMzctMTUuMDI1Yy4xMDgtLjY4OC43MDEtMS4xOTUgMS4zOTgtMS4xOTVoOC42OTljMTAuMTY0IDAgMTguNzkxLTcuNDE2IDIwLjM2Ni0xNy40NjUgMS41OS0xMC4xMzQtNi4zMjYtMTguOTcxLTE3LjU0Ny0xOC45OTN6bTkuMzAxIDExLjQyMmg2Ljk2YzUuNzMgMCA3LjU5NiAzLjM4MSA3LjAwNiA3LjEyLS41OSAzLjc0Ny0zLjQ4NyA2LjUwNy05LjAzMSA2LjUwN2gtNy4wODR6bTQ1Ljc4NyAzLjQ3OGMtMi40MTYuMDA5LTUuMTk2LjUwNC04LjMxNyAxLjgwNC03LjE1OSAyLjk4NC0xMC41OTcgOS4xNTEtMTIuMDU3IDEzLjY0NyAwIDAtNC42NDUgMTMuNzE3IDUuODU0IDIxLjI1MyAwIDAgOS43MzUgNy4yNTUgMjAuNjk3LS40NDdsLS4xODkgMS4yMDNhMS4zMSAxLjMxIDAgMCAwIDEuMjk0IDEuNTEzaDkuMDgyYy42OTcgMCAxLjI4OS0uNTA3IDEuMzk4LTEuMTk1bDUuNTI3LTM1LjAzOGExLjMxIDEuMzEgMCAwIDAtMS4yOTQtMS41MTVoLTkuMDgzYy0uNjk3IDAtMS4yOS41MDctMS4zOTggMS4xOTVsLS4yOTcgMS44ODZzLTMuOTY3LTQuMzMzLTExLjIxNi00LjMwNnptLjI5NyAxMS4wNjdjMS4wNDMgMCAxLjk5Ny4xNDQgMi44NTMuNDE5IDMuOTE5IDEuMjU4IDYuMTQxIDUuMDIzIDUuNDk4IDkuMTA0LS43OTMgNS4wMjUtNC45MTQgOC43MjUtMTAuMTk5IDguNzI1LTEuMDQyIDAtMS45OTYtLjE0My0yLjg1My0uNDE4LTMuOTE4LTEuMjU4LTYuMTU0LTUuMDIzLTUuNTExLTkuMTA0Ljc5My01LjAyNSA0LjkyNy04LjcyNyAxMC4yMTItOC43Mjd6IiBmaWxsPSIjMDA3MGUwIi8+PHBhdGggY2xpcC1wYXRoPSJub25lIiBkPSJNLTc0NS45MiA1NS44NTljLS43MiAwLTEuMjMyLjcwMy0xLjAxMiAxLjM4OGw5Ljk1OCAzMC45MDEtOS4wMDQgMTQuNTYyYy0uNDM3LjcwNy4wNzEgMS42Mi45MDIgMS42MmgxMC42NDJhMS43NyAxLjc3IDAgMCAwIDEuNTEzLS44NTRsMjcuODExLTQ2LjAwN2MuNDI3LS43MDctLjA4My0xLjYxMS0uOTA5LTEuNjExaC0xMC42NDFhMS43NyAxLjc3IDAgMCAwLTEuNTIyLjg2OWwtMTAuOTQ3IDE4LjQ4Mi01LjU1Ny0xOC4zNDVjLS4xODEtLjU5Ny0uNzMyLTEuMDA2LTEuMzU1LTEuMDA2eiIgZmlsbD0iIzAwMzA4NyIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgZD0iTS02MDkuMTA3IDM5LjczNGMtLjY5NiAwLTEuMjg5LjUwNy0xLjM5OCAxLjE5NWwtOC4wNyA1MS4xNjNhMS4zMSAxLjMxIDAgMCAwIDEuMjk0IDEuNTE1aDkuNTY4Yy42OTYgMCAxLjI4OS0uNTA3IDEuMzk4LTEuMTk1bDguMDY4LTUxLjE2NWExLjMxIDEuMzEgMCAwIDAtMS4yOTItMS41MTN6IiBmaWxsPSIjMDA3MGUwIi8+PHBhdGggY2xpcC1wYXRoPSJub25lIiBkPSJNLTkwOC4zNyAzOS43MzRhMi41OSAyLjU5IDAgMCAwLTIuNTU2IDIuMTg1bC00LjI0NyAyNi45MzZjLjE5OC0xLjI1OCAxLjI4Mi0yLjE4NSAyLjU1Ni0yLjE4NWgxMi40NDVjMTIuNTI1IDAgMjMuMTUzLTkuMTM3IDI1LjA5NS0yMS41MTlhMjAuNzYgMjAuNzYgMCAwIDAgLjI0NS0yLjc5M2MtMy4xODMtMS42NjktNi45MjItMi42MjQtMTEuMDE5LTIuNjI0eiIgZmlsbD0iIzAwMWM2NCIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgZD0iTS04NzQuODMyIDQyLjM1OWEyMC43NiAyMC43NiAwIDAgMS0uMjQ1IDIuNzkzYy0xLjk0MiAxMi4zODItMTIuNTcxIDIxLjUxOS0yNS4wOTUgMjEuNTE5aC0xMi40NDVjLTEuMjczIDAtMi4zNTguOTI2LTIuNTU2IDIuMTg1bC0zLjkwNSAyNC43NTItMi40NDYgMTUuNTI4YTIuMSAyLjEgMCAwIDAgMi4wNzUgMi40M2gxMy41MDhhMi41OSAyLjU5IDAgMCAwIDIuNTU2LTIuMTg1bDMuNTU4LTIyLjU2N2EyLjU5IDIuNTkgMCAwIDEgMi41NTgtMi4xODVoNy45NTNjMTIuNTI1IDAgMjMuMTUzLTkuMTM3IDI1LjA5NS0yMS41MTkgMS4zNzktOC43ODgtMy4wNDctMTYuNzg0LTEwLjYxMS0yMC43NXoiIGZpbGw9IiMwMDcwZTAiLz48cGF0aCBjbGlwLXBhdGg9Im5vbmUiIGQ9Ik0tOTIzLjcxNiAyMS43NzljLTEuMjczIDAtMi4zNTguOTI2LTIuNTU2IDIuMTgzbC0xMC42IDY3LjIxNmMtLjIwMSAxLjI3Ni43ODUgMi40MyAyLjA3NyAyLjQzaDE1LjcxOWwzLjkwMy0yNC43NTIgNC4yNDctMjYuOTM2YTIuNTkgMi41OSAwIDAgMSAyLjU1Ni0yLjE4NWgyMi41MTljNC4wOTggMCA3LjgzNi45NTYgMTEuMDE5IDIuNjI0LjIxOC0xMS4yNzMtOS4wODQtMjAuNTgtMjEuODczLTIwLjU4eiIgZmlsbD0iIzAwMzA4NyIvPjwvZz48L3N2Zz4K" alt="" /></div>
                        <div className="grid-item"><img src={googlepayPngImg} alt="" /></div>
                        <div className="grid-item"><img src="https://ipayment.de/amazon/img/amazonpay-button-logo.svg" alt="" /></div>
                    </div>
                    <div style={{width: "100%", margin: "30px 0px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <hr />
                        OR
                        <hr />
                    </div>
                    <div className='continue-btn'>
                        <a href="#">View Invoice</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
