import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

class EmailScripts extends Component {
   state = {
      value: "",
      copied: false
   };

   notify = () => {
      toast.info("Copied To Clipboard", {
         position: toast.POSITION.BOTTOM_CENTER
      });
   };

   render() {
      return (
         <header>
            <div class="modal-content">
               <ToastContainer autoClose={1500} draggable={true} />
               <h5>E-mail Scripts</h5>
               <div class="row"></div>

               <ul class="collapsible">
                  <li>
                     <div class="collapsible-header">
                        <i class="material-icons expand">expand_more</i>{" "}
                        <i class="material-icons">email</i>New Reach Out - Old
                        Friend
                     </div>
                     <div class="collapsible-body">
                        <div>
                           <CopyToClipboard
                              text="Hi [%contact_first_name%],

                              I know it's been a long time since we've spoken, but you've been on my mind a lot lately.  I've started a new business and I can't help but think of how incredible you would be at this.  I'd love the opportunity to tell you all about it.  I only need 10 minutes of your time and then the rest we can spend just catching up on what's been going on in our worlds.  
                              
                              I'm available ________________ at _________ or ________________ at ____________.  Let me know what works best for you.
                              
                              Can't wait to hear your voice!
                              
                              -[%your_first_name%]"
                              onCopy={() => this.setState({ copied: true })}
                           >
                              <span>
                                 Hi [%contact_first_name%],
                                 <br />
                                 <br /> I know it's been a long time since we've
                                 spoken, but you've been on my mind a lot
                                 lately. I've started a new business and I can't
                                 help but think of how incredible you would be
                                 at this. I'd love the opportunity to tell you
                                 all about it. I only need 10 minutes of your
                                 time and then the rest we can spend just
                                 catching up on what's been going on in our
                                 worlds.
                                 <br />
                                 <br /> I'm available ________________ at
                                 _________ or ________________ at ____________.
                                 Let me know what works best for you.
                                 <br />
                                 <br /> She and I are available ________________
                                 at ___________ or ___________________ at
                                 _______________. Let me know what works best
                                 for you.
                                 <br />
                                 <br /> Can't wait to hear your voice!
                                 <br />
                                 <br />
                                 -[%your_first_name%]
                              </span>
                           </CopyToClipboard>

                           <CopyToClipboard
                              text="Hi [%contact_first_name%],
                              It was so wonderful speaking with you today!
                              Honestly, one of my favorite things about this
                              business is that it gives me an excuse to reach out
                              to old friends and catch up. Between that and the
                              time freedom I've gained it's been absolutely life
                              changing.
                              
                              I'm so thrilled that you want more information
                              on the company. I've attached some materials on the
                              brand and our products, but as I mentioned on the
                              phone, I think you'd benefit the most from speaking
                              with my team member ____________. She's incredible
                              and I think you'll get a lot out of a quick chat with
                              her.
                              
                              She and I are available ________________ at
                              ___________ or ___________________ at
                              _______________. Let me know what works best for you.
                              
                              Have a wonderful day!
                            
                              -[%your_first_name%]"
                              onCopy={() => this.setState({ copied: true })}
                           >
                              <div class="row">
                                 <button
                                    onClick={this.notify}
                                    class="waves-effect waves-light btn left"
                                 >
                                    Copy To Clipboard
                                 </button>
                              </div>
                           </CopyToClipboard>
                        </div>
                     </div>
                  </li>

                  <li>
                     <div class="collapsible-header">
                        <i class="material-icons expand">expand_more</i>{" "}
                        <i class="material-icons">email</i>Follow Up - Old
                        Friend - More Info
                     </div>
                     <div class="collapsible-body">
                        <div>
                           <CopyToClipboard
                              text="Hi [%contact_first_name%],
                              It was so wonderful speaking with you today!
                              Honestly, one of my favorite things about this
                              business is that it gives me an excuse to reach out
                              to old friends and catch up. Between that and the
                              time freedom I've gained it's been absolutely life
                              changing.
                              
                              I'm so thrilled that you want more information
                              on the company. I've attached some materials on the
                              brand and our products, but as I mentioned on the
                              phone, I think you'd benefit the most from speaking
                              with my team member ____________. She's incredible
                              and I think you'll get a lot out of a quick chat with
                              her.
                              
                              She and I are available ________________ at
                              ___________ or ___________________ at
                              _______________. Let me know what works best for you.
                              
                              Have a wonderful day!
                            
                              -[%your_first_name%]"
                              onCopy={() => this.setState({ copied: true })}
                           >
                              <span>
                                 Hi [%contact_first_name%],
                                 <br />
                                 <br /> It was so wonderful speaking with you
                                 today! Honestly, one of my favorite things
                                 about this business is that it gives me an
                                 excuse to reach out to old friends and catch
                                 up. Between that and the time freedom I've
                                 gained it's been absolutely life changing.
                                 <br />
                                 <br /> I'm so thrilled that you want more
                                 information on the company. I've attached some
                                 materials on the brand and our products, but as
                                 I mentioned on the phone, I think you'd benefit
                                 the most from speaking with my team member
                                 ____________. She's incredible and I think
                                 you'll get a lot out of a quick chat with her.
                                 <br />
                                 <br /> She and I are available ________________
                                 at ___________ or ___________________ at
                                 _______________. Let me know what works best
                                 for you.
                                 <br />
                                 <br /> Have a wonderful day!
                                 <br />
                                 <br />
                                 -[%your_first_name%]
                              </span>
                           </CopyToClipboard>

                           <CopyToClipboard
                              text="Hi [%contact_first_name%],
                              It was so wonderful speaking with you today!
                              Honestly, one of my favorite things about this
                              business is that it gives me an excuse to reach out
                              to old friends and catch up. Between that and the
                              time freedom I've gained it's been absolutely life
                              changing.
                              
                              I'm so thrilled that you want more information
                              on the company. I've attached some materials on the
                              brand and our products, but as I mentioned on the
                              phone, I think you'd benefit the most from speaking
                              with my team member ____________. She's incredible
                              and I think you'll get a lot out of a quick chat with
                              her.
                              
                              She and I are available ________________ at
                              ___________ or ___________________ at
                              _______________. Let me know what works best for you.
                              
                              Have a wonderful day!
                            
                              -[%your_first_name%]"
                              onCopy={() => this.setState({ copied: true })}
                           >
                              <div class="row">
                                 <button
                                    onClick={this.notify}
                                    class="waves-effect waves-light btn left"
                                 >
                                    Copy To Clipboard
                                 </button>
                              </div>
                           </CopyToClipboard>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div class="collapsible-header">
                        <i class="material-icons expand">expand_more</i>{" "}
                        <i class="material-icons">sms</i>Forgot to follow up
                     </div>
                     <div class="collapsible-body">
                        <div>
                           <CopyToClipboard
                              text="Hey! I'm so sorry I haven't followed up with you
                              sooner. I have been SO busy with clients and team
                              members that I don't even know where the days have
                              gone. Good problems but, I'm still sorry.
                             
                              How are things?"
                              onCopy={() => this.setState({ copied: true })}
                           >
                              <span>
                                 Hey! I'm so sorry I haven't followed up with
                                 you sooner. I have been SO busy with clients
                                 and team members that I don't even know where
                                 the days have gone. Good problems but, I'm
                                 still sorry.
                                 <br />
                                 <br /> How are things?
                              </span>
                           </CopyToClipboard>

                           <CopyToClipboard
                              text="Hey! I'm so sorry I haven't followed up with you
                              sooner. I have been SO busy with clients and team
                              members that I don't even know where the days have
                              gone. Good problems but, I'm still sorry.
                             
                              How are things?"
                              onCopy={() => this.setState({ copied: true })}
                           >
                              <div class="row">
                                 <button
                                    onClick={this.notify}
                                    class="waves-effect waves-light btn left"
                                 >
                                    Copy To Clipboard
                                 </button>
                              </div>
                           </CopyToClipboard>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
            <div class="modal-footer center-align">
               <button className="modal-close waves-effect waves-light btn btn-primary center-align">
                  Close
               </button>
            </div>
         </header>
      );
   }
}

export default EmailScripts;
