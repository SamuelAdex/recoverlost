/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from './Button'
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
    const faq = [
        {
            id: 1,
            title: "Learn more about RecoverLost and the chargeback industry right here",
            content: "Online scams are prevalent among illegitimate shops and merchants on the internet today. It is laden with untrustworthy transactions that seek to victimize those who are vulnerable. While we guard ourselves against these dangerous tradings, there are times when they cannot be prevented.<br/><br/>For instance, there are a lot of online markets and traders that can easily fool people by posing as a legitimate authority. They can be so real that not a lot of people can spot their real motives. Falling victim into this kind of scam can be really frustrating and painful, not just in our credits but also in our integrity as a buyer or a trader. While we think that all hope is lost, it’s not quite over.<br /><br/>RecoverLost’s funds’ recovery program has been helping consumers and users online recover what is rightfully theirs after being victimized by trading scams, trade platform scams, and the likes.<br /><br/> Funds recovery has been a prominent method of wealth recovery and scam money recovery. Due to this, there are also recovery scams that have been spreading online. With all the deceptions and frauds circulating on the internet, you must be smart about it.<br /><br/> For a legitimate wealth recovery expert, RecoverLost can help you. RecoverLost scam recovery has helped victims all over the world to retrieve their money with their wealth recovery experts on scams. For recovery funds in the UK, they are adept at the area. To learn more about them and the trade industry, here is everything you need to know"
        },
        {
            id: 2,
            title: "The chargeback industry",
            content: `First and foremost, a chargeback is characterized as the action or process of filing a request for retrieval of funds by the customer either with a bank.<br/><br/> Naturally, when a consumer buys something, he/she will provide the monetary price of the item or service that is required for the business transaction. However, on rare occasions, any consumer can file for a return of funds from the shop or merchant, either due to error in processing, disagreements, or possible fraud.<br/><br/><underline className='font-semibold'>The chargeback method</underline> is created in consideration of the customer’s safety and protection from scams or any fraudulent scams in the marketplace. There are consumer protection codes in some parts of the world that make sure of the return of products in the case of detection of a scam.<br/><br/>Some shops require a tedious refund process to prevent consumers from asking for a refund since they would have to go through a lot of trouble just for repayment. Hence, the chargeback industry is useful in this account.<br/><br/>Rather than the conventional means of asking for the money back, the chargeback method asks the bank directly for a refund rather than the shop or merchant itself. Chargebacks are designed to provide consumers with security when shopping online and ensure that sellers remain transparent and prevent them from selling bogus products or services.`
        },
        {
            id: 3,
            title: "Funds recovery with RecoverLost",
            content: `RecoverLost offers this kind of service with wealth recovery experts and fund recovery specialists – ensuring that you get your investments back from scammers. However, what really is funds recovery?<br/><br/>In a nutshell, funds recovery is a service that is both consultative and investigative in its approach. This is a service employed by victims that have been duped by online fraudulent crimes to retrieve their money from bogus merchants and trader scams.<br/><br/>Funds recovery services like RecoverLost specialize in handling internet scams online and lend a hand in providing refunds and reimbursements to the targets through the use of arguments and disputes, along with digital fingerprints track downs, analysis of cyber transactions, and an in-depth investigation.<br/><br/>Companies that provide funds recovery services have a high chance of a successful crypto scam recovery, Bitcoin scam recovery, scam money recovery, and wealth recovery.<br/><br/>When RecoverLost receives a complaint from victims, they immediately work and review the details of the situation. For a successful recovery, funds recovery review or scam recovery review of the claims must be done, and pieces of evidence must be gathered.<br/><br/>The complaint must be valid, and the terms and conditions of the company must be followed`
        },
        {
            id: 4,
            title: "Recover from online trading scams",
            content: `<div class='flex recover-faq flex-col gap-5'>
                <div class='flex gap-3 items-center'>
                    <div class='yellow-bg'></div>
                    <span class=''>How can I recover my lost money from Forex?</span>
                </div>
                <div class='flex gap-3 items-center'>
                    <div class='yellow-bg'></div>
                    <span class=''>How to recover trading loss?</span>
                </div>
            </div><br/><br/>These questions linger among those who have fallen target to online trading scams victims. Forex and Cryptocurrencies have shaped the trading markets quite differently. Nowadays, more and more people have been susceptible to these scams.<br/>However, with RecoverLost, getting your money back quickly is not a problem.<br/><br/>Scams in online trading are connected to investment scams that are prevalent in the trading markets. They are often posted and advanced on social media sites, with fraud traders promising high returns along with popular endorsements from prominent people to encourage and attract people to trade and invest with them.<br/><br/>They pose as professionals with legitimate-looking websites to trick people into their scams.<br/><br/>RecoverLost provides solace for any online trading scams. The company helps people from trade platform scams and lets victims recover money from Bitcoin scam.`
        },
        {
            id: 5,
            title: "About RecoverLost",
            content: `<div className=''></div><br/>These questions linger among those who have fallen target to online trading scams victims. Forex and Cryptocurrencies have shaped the trading markets quite differently. Nowadays, more and more people have been susceptible to these scams.<br/>However, with RecoverLost, getting your money back quickly is not a problem.<br/><br/>Scams in online trading are connected to investment scams that are prevalent in the trading markets. They are often posted and advanced on social media sites, with fraud traders promising high returns along with popular endorsements from prominent people to encourage and attract people to trade and invest with them.<br/><br/>They pose as professionals with legitimate-looking websites to trick people into their scams.<br/><br/>RecoverLost provides solace for any online trading scams. The company helps people from trade platform scams and lets victims recover money from Bitcoin scam.`
        },
    ]
  return (
    <>
        <div className='mt-20'>
            <div className='md:w-[50%] w-full md:px-0 px-6 m-auto m-[0px]'>
                <h1 className='text-center font-bold md:text-[40px] md:leading-[40px] text-[30px] text-primary'>More about RecoverLost and the chargeback industry </h1>
            </div>
            <div className="mt-10 md:w-[48%] divide-y divide-secondary w-full m-auto m-[0px] flex flex-col gap-5 md:px-0 px-6">
                {faq.map((_,i)=>(
                    <FAQItem key={i} title={_.title} content={_.content} />
                ))}
            </div>
        </div>
        
        <div className='p-10 py-20 bg-secondary mt-24'>
            <div className='flex md:flex-row md:w-[50%] gap-12 w-full m-auto m-[0px] justify-center flex-col'>
                <div className='flex flex-col items-center'>
                    <div className='text-[#f0f0f0] text-center'>
                        <h1 className='md:text-[40px] text-[20px] font-semibold'>Let&apos;s get your money back!</h1>
                    </div>
                    <p className='md:text-[18px] text-[16px] text-center text-[#bdbdbd] mt-4'>If you&apos;ve been ripped off by scammers, get in touch and our team of experts will work to get your money back</p>
                    <div className='md:w-[70%] w-full mt-4'>
                        <select name="" className='p-4 bg-gray-200 w-full focus:outline-primary font-semibold text-[18px] text-gray-400' id="">
                            <option className='after:border-l-green-400 after:border-l-[3px] ' value="">Choose a scam type</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Binary options</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Cryptocurrency</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Forex</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Stock Trading</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Property scam</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Romance scam</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Other scam</option>
                        </select>
                        <Button
                            text={"Get a free consultation"}
                            btnStyle={"bg-green-400 hover:opacity-[70%] w-full text-white mt-2 font-semibold md:text-[18px] text-[16px] rounded-none p-3"}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default FAQ


function FAQItem({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="py-3">
            <div onClick={()=> setIsOpen(!isOpen)} className='text-primary mt-4 flex items-center gap-3'>
                <span className='font-bold md:text-[20px] flex-[3] text-[18px]'>{title}</span>
                <div className='flex justify-end'>
                    <IoIosArrowDown fontSize={'1.2rem'} className={`flex-[1] font-black ${isOpen ? 'rotate-[180deg]' : ''}`} />
                </div>
            </div>
            {isOpen && <div className='md:text-[20px] mt-4 text-[18px] text-gray-400' dangerouslySetInnerHTML={{ __html: content }}/>}
        </div>
    )
}