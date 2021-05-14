import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ThirdSectionDashboard = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="tearms__and__conditions">
            <h1 className="tearms__heading">
                Terms and Conditions
            </h1>
            <p className="tearms__para">
                By engaging more, the chances to win increases. You get ONE (1) chance for pledging, and additional TWO (2) chances for each pledge by your referrals. You also get additional TEN (10) chances if your verify your identity and receive verified certificate by The Sparks Foundation.<br/>
                <br/>
                The challenge will run from 1st of March 2021 to 31st of March 2021. The results will be announced on 7th of April 2021. Amazon Vouchers worth INR 1,00,000 are available for giveaway. The Amazon Vouchers will be procured for the country you are residing in.<br/>
                <br/>
                For full terms and conditions of the challenge, please click below.<br/>
            </p>
            <Button className="button__align" variant="primary" onClick={() => setModalShow(true)}>
                View All
            </Button>


            <Modal
               show={modalShow}
               onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered 
                
            ><div className="container p-4 m-4">

            
                <h1 className="modal__heading">Full Terms and Conditions</h1>
                <p className="modal__para">
                    Everyone irrespective of gender, race, region or religion, is allowed and encouraged to participate in this challenge.<br/>
                    Founders, paid employees of The Sparks Foundation, and their family and friends, are not eligible to win Amazon vouchers. Interns and unpaid employees are eligibile.<br/>
                    <br/>

                    Compulsory use of the hashtag - #IStandForGenderEquality with every social media share is required.<br/>
                    Winners will be invited to share a few words on why they support #IStandForGenderEquality and have their thoughts featured on the TSF Facebook page at the end of the challenge.<br/>
                    Contest shall begin on the 1st of March (Monday) and end on the 31st of March (Wednesday) by 11:59 PM IST. No challenge entries shall be accepted beyond this period.<br/>
                    Winners shall be awarded at random based on the chances they have them during the contest period.<br/>
                    Each person is allowed to participate in the challenge and giveaway only once. A participant can have more chances to win by engaging in other activities.<br/>
                    One chance is awarded for pledging. Additional two chances are awarded for each pledge by referrals. Additional ten chances are awarded on successful verification of identity (name and profile picture).<br/>
                    For each chance the participant is added to the selection pool from which final selection is done.<br/>
                    50 winners will be selected at random. Each winner will receive an amazon voucher worth INR 2,000.<br/>
                    Winners can choose to receive vouchers from any other online marketplace (instead of Amazon) and currency (other than INR). Winners shall have upto 30th of April to claim the Vouchers.<br/>
                    Winners shall be declared on the 7th of April by end of day.<br/>
                    Winners will be reached out to via their shared email address.<br/>
                    No posting or submitting of any obscene or indecent pictures.<br/>
                    No use of negligent statements. Hate speech and libel disallowed.<br/>
                    Submission of a pledge will be taken to mean acceptance of these terms and conditions.<br/>
                    Read full Policies and Code of Conduct and Personal Data Protection Policy here.<br/>
                    Submission of a pledge will be taken to mean acceptance of these terms and conditions.<br/>
                </p>
                <Button variant="primary" onClick={() => setModalShow(false)}>
                Close
            </Button>
            </div>


            </Modal>
        </div>
    )
}

export default ThirdSectionDashboard
