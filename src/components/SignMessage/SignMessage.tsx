import React, {useCallback, useEffect, useState} from "react";
import {ethers} from "ethers";
import style from './SignMessage.module.scss';
import {AiOutlineClose} from "react-icons/ai";
import modalStyles from '../../shared/styles.module.scss'
import {FaFileSignature} from "react-icons/fa";

type Message = {
    message: string,
    signature: string
}

const SignMessage = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [isSigning, setIsSigning] = useState<boolean>(false);
    const [signedMessage, setSignedMessage] = useState<Message | null>(null)

    useEffect(() => {
        setSignedMessage(null);
        setMessage('');
    }, [isModalVisible])

    const handleSignMessage = useCallback(async (message: string) => {
        setIsModalVisible(true);
        setIsSigning(true)
        let provider = new ethers.providers.Web3Provider(window.ethereum as any)
        const signer = await provider.getSigner();
        try {
            const signature = await signer.signMessage(message)
            setSignedMessage({message, signature});
        } catch (err) {
            console.error(err)
        }
        setIsSigning(false);
    }, [])

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const SignForm = <><main>
        <small>
            Enter a message to sign:
        </small>
        <textarea spellCheck={false} rows={5} value={message} disabled={isSigning} onChange={handleMessageChange}/>
    </main>
    <button onClick={() => handleSignMessage(message)} disabled={isSigning}>Sign <FaFileSignature /></button></>

    const Message = <main className={style.message}>
        <small>
            Message
        </small>
        <p>
            {signedMessage?.message}
        </p>
        <small>
            Signature
        </small>
        <div>
            {signedMessage?.signature}
        </div>
    </main>

    return<>
        {isModalVisible && <div className={modalStyles.backdrop}/>}
        <button className={style.signMessageButton} onClick={() => setIsModalVisible(true)} disabled={isSigning}>Sign message <FaFileSignature /></button>
        <dialog className={`${modalStyles.modal} ${style.signMessage}`} open={isModalVisible}>
            <header className={modalStyles.modalHeader}>
                Sign message
                <button disabled={isSigning} onClick={() => setIsModalVisible(false)}><AiOutlineClose/></button>
            </header>
            {signedMessage ? Message : SignForm}
        </dialog></>
}

export default SignMessage;