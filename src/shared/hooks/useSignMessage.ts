import {ethers} from "ethers";

export const useSignMessage = () => {
    const signMessage = async (message: string) => {
        let provider = new ethers.providers.Web3Provider(window.ethereum as any)
        const signer = await provider.getSigner();
        try {
            const signature = await signer.signMessage(message)
            console.log(signature);
        } catch (err) {
            console.error(err)
        }
    }
}