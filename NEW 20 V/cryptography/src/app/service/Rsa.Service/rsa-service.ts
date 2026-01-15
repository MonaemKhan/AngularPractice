import { Injectable } from '@angular/core';
import * as forge from 'node-forge';

@Injectable({
  providedIn: 'root'
})
export class RsaService {
  private publicKey: any = null;
  private privateKey: any = null;

  // For testing purposes, you can use these default keys
  //

  private publicKey_load: any = '<RSAKeyValue><Modulus>r1N8SIJGP4QQfP6KHa8lyCzE69rBbWoX8SPIXyPw9/zfFAiFVFz6HioUtnLNTc/9ZU5rWuTNUG32iCrsK1I9o7KtBGI97rDlm6DpNpC0EHMkMyHTVe7XbORStD7Rh8OciyE0VnoZOzHk/3g2z394b/aRyhctDEPe3yGEZZlUn2PW6yQWuUx1czuy4sZVW6yNbhDMvYBrdfoPZFZgLhAVo+uKOVCqkIK2C7klHCJmtllTys/bM+s4MW40OD1yzJ0zjFeQPfq5eDWqyGYj9bkKAZNlhByf4ghSdFGalweFMNsO4uMWC+Np6jkKNMDXX0AAv60MdM316g0W8Su9jqeaOtV/W7SIrduCTn8Osn5FBu5P1cjDbzsg2v2yM30JTHjCcy6EGbQ8BnYCU+HSe9aLfvPwe20CoHr7tjldwMrbtBSicgLhnWvn+X8OMIozKLTNw9Ps6afJW0nOS1BxJ4JHkgPx3xA7JM4Ok0bK4Sj6bh9YOdYlEsvTzLjdORGiWCXzB4uOoDEDypoqWEURQSb7jPn5rek7X0dfUxS0HHc1oM6zQIBf5qqKRLR/cA352zKAKVF5vTryZMYCPWPtlqJPHaGkNr+NrtHdeshO8lWs3+EYVsm7g9iUiwgV6qCvaDkkO2i624TzchFjL4ZOqryhmHpIlmqoRI4QWVJeKX8izPk=</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>';
  private privateKey_load: any = '<RSAKeyValue><Modulus>uy9NHmj7HIj1VEa2ylBFgkW+6RTwSDIgqgZzTfSFn2M94dof4VyPPUOKs6toPig7ZManRrqnCbRahhriv1OtW9L6Cdczzm3S9Ulr0soSLlmbMmb/Kav2T5VEn1ZZi3hIBAiunwtleewND0xNnW6MQc0T6YsPsHCVY+Bs2/kAkJJVE8dF23gibEBBo9hJuDBM8qzLHpIyTJOP/auzofWT8v6mKzL0Ez4YQUCMV43nNgTa6EbxsTb/PYnftFc7Z6G77XbsScazS4uj77Mu1H4W84BxcaExiSEh6WK8db9VThsUhScdffyEMwCpeRCgPQHqYjI2J1GMaNdEDpFGZs07dLWVhzIOM37+uoSAz/ydRBIlWwVa/B5DiYZxn/aDXACy8zGEnkyBnvgwicQgHPFSQN7oAI3+0HIqDyo1Oex9aBzdwZHcXU+/zM2yIHz1gcTkPQnDkRkkiKvpQVczEt/5WvTRBO8SzZLCAG9aEXE5/hIEqCzwZaogf1GrzttIBB+/oQi0zIRFEJXxJ0y1wr+fP4mzx8EXlufV2st/ZdrBzc7RSMaSxFoKmosEOGgaRxlb0K5flvdccWIGedaUWXyB8vuP6oHspzWzCBIDfnEvqVHJ+mWju2wHFZxQ9Pk34zKGSiCrVQ/IdhR0NVLxTRYoWidFzbbGxLDYe8T7JdIcG9E=</Modulus><Exponent>AQAB</Exponent><P>9qNut/BKz/sc8EN6hv6du8kMihLKhyrVU9zJ2cBdeHUKIOcxHUgZxukBJ6zE9/GflWnxpdXrEj3/qrjEs+XeLMntxLEPKoaUcNH/6JCHU+MquEQDPqfaOPOuktw7DxaPGKh28cyT4X+BCTfArX8OjXENFlnolDZFmZBwuorzrdpa9/oInIOxvWz/i+6mCfuv/Xlk/kQaYhX0T6Y99qajNQ0zrQl4zmpIBo7ZMxJvXV29xbSSn7Oan680JBcE3Sl5OsW3um8gr6aRAR3GwEGynhcNvXt4r9eBrKUxpdL3VIL0xVEZkSibCYBqPck6/SiNglF5cZtIwLp10MCbuU9o3w==</P><Q>wkopfW0sej08jcAvT0YxSDQPlIb7K65j2GwtvVhZ2J9mvCe1jl+QXMEDmfdDLwgn5eErfj3m2jA7OEon5xF3rM5/Is4cvQwRc+YYomyyEtMJU+DhKCZ6+YOz5bv7oPWCDWdzQJVzzy7N2OOXRRNltYotId6KVbQyxuLVfVOXxytaEy0JyHJMpDLRAIx0Qv0zHxgMicH9wFz+JyB620+8eIFL0ttF6WH9XXD/8Sju3mXfcI40MwUYHBHqwuOLv9fQxKom1YmodQaNEwiiJ0FWl3uvByoz3Fyg7nPQBS84YceTHBfmf8SxZQwG8f+DuURswUmskoF0M81FHSiFfqohTw==</Q><DP>BvGA63K7WHGUVftAVs6SODgnvzdaNkXxbYP4tsWgnASHfXekvVNLTns+yhQmE2jc+kLaR7XnAUN3kCHVf88H2zDwHapyZ9sUEL0IvE5dUPJDQJ7BjKEDFrldf8rtarZS3vnXJ2WAAEgrpMvKA9hg24CEQs3TK2D/wpv7YHUK+Sj9iJ+kYGugtFl+ND1KtVs9kCA7xKC8MWi20Qs4EVqNm6+8dbGfkggR8QVSfgqV0gYSkp9LxW0z/CzdheqT+3nwbMQmMPxx6iABUwu4ja8LzUGO5He2ZRTnFKot5KI0zk9FfsySsLB49OKFmymwHHJo0XNjvNwHR024hWD2wVfH9w==</DP><DQ>stytV3+jG6G2VlTf+N4IzozG7xhYsHzqBDqK3S4yAF+2p27zEG/fqdQy6ZIdMnYSrOlfLef011bhnc9+7pVBFEBCAJu5DzzF8GmasiTYxsWrZ6G2Bk1ulrftbIhjfWmm4YokKwerRseyz4GuJ/RUhQ0AwZZqyb2LpVb77VWAe+XoFZE32WWIMv1pNVUYTvdkEbMFD+kcHvQ9MW4QTEganOGDGUmuEc2Y/2Xg6XWiefFVAvyXB4UgDe9crS/n3qPi2Lo/6APDpoBybVxcU0EuY2SE3Fa4yZwot3y8u5keEb42Kv3BwEwmd3zcA/sTnAJnEIYvrewpOus1PkOoqdQbtw==</DQ><InverseQ>I0j+vovs/IRmfUlLM9r1igwXOyFh3xrO3yMktlDPjOq0Ah1oKlJEy9mfDYzqFjDMgy0zpqtMA+7Sx+GFT5b9L149xLF8Jhq0aPusy5QrxgQik3XT7WgQINj4Df2rNRkVcVEm4mMA+9J30DZotwoLAfyOic4qdg7Y/IhE3Zec+p8RT78hzlTuAziVN0BHqft5MF3MHc7Cnd7fHGA7H0TksfasVgHnQpvQywoVewglpO4hYq8GXHqV3Q/rtGrVeouqEeAIT76eMw6Nn7sz3NmcYlD09aZSDhFaPLxRvwd6/yhF8zU/gH6ishr761BFVvd9nnKwB+aLDz5aDp+rkkAzqw==</InverseQ><D>XjDVK6JECf3ZBYl33aI69+zEvmDs8EdZLHWGfAm5W5UCxK2QMUT0Ry2/k92C3RQ9nt5fujWebEG285h/1Sr0Jyqo617BEPUunINPoIhSUcSBVgGCEKQZk75XA57d/FKQWodL53hCnfFsOPB6def05/+cL37sbCqa4eFCpgZMhHM+IG+79U4kdDh5T0s8/VRAxDSzGTUT3ni6kjlecPc0dagyUbaYHz610c/7Tut3FzWmOg/I+xXjpkHEsejbWbCG8l1PVWiJPFCOM8YEoKS6Q9m0PCuS06A6gkhO8SlQcbcqwj4GlykEFO4WWXdGSqy2FqeRnINqli8MbhAoTv6jFZ+Rma7J+ErOMHCldRcCmBSBp/VR8GJo4vobT26EKU6+AnMhsT9drddrwW6YpZWUo7C+d6kKuPzuoUkaRNHrFzGGp636qyvy3IuLlYfrGe9aVufYeqpauhg4dp+paXcsfmFtxliA03KJ2mRq1cin4a6u3gewsJSMGz4y5n7kSfYPDHNQaAHtNgnhjDe6zJy0nfnEt4KMDTCiLqrDKz8rrsVJ6CKK2wbjOtIhXxa2CpPHTM76ILrvMrZUXAgJaI0fHumP7rLXtjz2ruIx5+6ZURAhs/9ZGH8ElYddci8+0oyHPZ27cS21duWnFIlklRATJ5NWgoBjEvVt5TvUM0CkeIk=</D></RSAKeyValue>';

  constructor() {}

  loadBothKey(){
    this.loadPublicKey(this.publicKey_load);
    console.log("Loaded Public Key");
    console.log(this.publicKey);
    this.loadPrivateKey(this.privateKey_load);
    console.log("Loaded Private Key");
    console.log(this.privateKey);
  }

  loadPublicKey(xmlKey: string) {
    try {
      const pemKey = this.xmlToPem(xmlKey, false);
      this.publicKey = forge.pki.publicKeyFromPem(pemKey);
    } catch (error) {
      throw new Error('Invalid public key format');
    }
  }

  loadPrivateKey(xmlKey: string) {
    try {
      const pemKey = this.xmlToPem(xmlKey, true);
      this.privateKey = forge.pki.privateKeyFromPem(pemKey);
    } catch (error) {
      throw new Error('Invalid private key format');
    }
  }

  encrypt(plainText: string): string {
    if (!this.publicKey) {
      throw new Error('Public key not loaded');
    }

    try {
      const encrypted = this.publicKey.encrypt(
        forge.util.encodeUtf8(plainText),
        'RSA-OAEP',
        {
          md: forge.md.sha256.create()
        }
      );
      return forge.util.encode64(encrypted);
    } catch (error) {
      throw new Error('Encryption failed: ' + error);
    }
  }

  decrypt(cipherText: string): string {
    if (!this.privateKey) {
      throw new Error('Private key not loaded');
    }

    try {
      const encrypted = forge.util.decode64(cipherText);
      const decrypted = this.privateKey.decrypt(encrypted, 'RSA-OAEP', {
        md: forge.md.sha256.create()
      });
      return forge.util.decodeUtf8(decrypted);
    } catch (error) {
      throw new Error('Decryption failed: ' + error);
    }
  }

  private xmlToPem(xml: string, isPrivate: boolean): string {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');

    const modulus = this.base64ToArrayBuffer(
      xmlDoc.getElementsByTagName('Modulus')[0].textContent!
    );
    const exponent = this.base64ToArrayBuffer(
      xmlDoc.getElementsByTagName('Exponent')[0].textContent!
    );

    if (isPrivate) {
      const d = this.base64ToArrayBuffer(
        xmlDoc.getElementsByTagName('D')[0].textContent!
      );
      const p = this.base64ToArrayBuffer(
        xmlDoc.getElementsByTagName('P')[0].textContent!
      );
      const q = this.base64ToArrayBuffer(
        xmlDoc.getElementsByTagName('Q')[0].textContent!
      );
      const dmp1 = this.base64ToArrayBuffer(
        xmlDoc.getElementsByTagName('DP')[0].textContent!
      );
      const dmq1 = this.base64ToArrayBuffer(
        xmlDoc.getElementsByTagName('DQ')[0].textContent!
      );
      const coeff = this.base64ToArrayBuffer(
        xmlDoc.getElementsByTagName('InverseQ')[0].textContent!
      );

      const privateKey = forge.pki.setRsaPrivateKey(
        this.arrayBufferToBigInt(modulus),
        this.arrayBufferToBigInt(exponent),
        this.arrayBufferToBigInt(d),
        this.arrayBufferToBigInt(p),
        this.arrayBufferToBigInt(q),
        this.arrayBufferToBigInt(dmp1),
        this.arrayBufferToBigInt(dmq1),
        this.arrayBufferToBigInt(coeff)
      );

      return forge.pki.privateKeyToPem(privateKey);
    } else {
      const publicKey = forge.pki.setRsaPublicKey(
        this.arrayBufferToBigInt(modulus),
        this.arrayBufferToBigInt(exponent)
      );

      return forge.pki.publicKeyToPem(publicKey);
    }
  }

  private base64ToArrayBuffer(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  private arrayBufferToBigInt(buffer: Uint8Array): any {
    let hex = '';
    for (let i = 0; i < buffer.length; i++) {
      hex += ('00' + buffer[i].toString(16)).slice(-2);
    }
    return new forge.jsbn.BigInteger(hex, 16);
  }
}
