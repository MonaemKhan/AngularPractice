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

  private publicKey_load: any = '<RSAKeyValue><Modulus>u3hokjzp/NQWZSVWAXAmHz7CaKztWlffQciqtVh+76MhqHPJDiKEX+u0IF05v5Ev/k+NQTfCCEtHZgJAeCrXNsBpAcOiFN5Kwwx20PBwn8PN5WmGlBWHtB0cRocySIOR7T79q81AqCM8vnnoCEF/wjr5DM7Gp6ScR2LT8OQ99E6mZWPwbYIkzwHNIZWfbt9lI29wGOUWwZcSe+7s15m271CqjgZgxmdllPAXuNGeMP9ZIw4W47iI41aWsdRzQZckTTcGLK9sLDPEMtwUEWoH+QHB+dQ0+QaOAkyMmKxNJfGk8SVA5BxtGTawOyh6/H7+7SYOs6uYTXK9VQGjkyEytQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>';
  private privateKey_load: any = '<RSAKeyValue><Modulus>u3hokjzp/NQWZSVWAXAmHz7CaKztWlffQciqtVh+76MhqHPJDiKEX+u0IF05v5Ev/k+NQTfCCEtHZgJAeCrXNsBpAcOiFN5Kwwx20PBwn8PN5WmGlBWHtB0cRocySIOR7T79q81AqCM8vnnoCEF/wjr5DM7Gp6ScR2LT8OQ99E6mZWPwbYIkzwHNIZWfbt9lI29wGOUWwZcSe+7s15m271CqjgZgxmdllPAXuNGeMP9ZIw4W47iI41aWsdRzQZckTTcGLK9sLDPEMtwUEWoH+QHB+dQ0+QaOAkyMmKxNJfGk8SVA5BxtGTawOyh6/H7+7SYOs6uYTXK9VQGjkyEytQ==</Modulus><Exponent>AQAB</Exponent><P>3JCu83650p/qDtCEoQNTz3kq2nfwBk197cebjvq/6fxLG7C1QwrpG1mBopfzBjbbKUTCVjX0b0SLpcSEsh+5N3l8rkkkNJOUcpNwPl6zJPJiluFXz72wXN+H/rtM3VCqFf+0b/9YP4guKzRCi3PLU1Q3KUwI85owsDBpgkW2Si8=</P><Q>2ZadRAJumJnOXM5q4dysS61/7fpGLSaVq+MNydmPY3VlMTWxvcmjLQUt7iE02qBlAdl88RCFZP3pIL6VxvWtKWV13gWA+5SGjHjY/NrZDyxoX+FtkuzzvmVCT2sir/6O+fM24mrY2wlaPaAZxarRviw3x/yefkg+E2VOcH9HbFs=</Q><DP>EpZy1/xfBpwJapQyCSuxnXN1pBGlfbJ8IVTIDEWfdMWZQs0iiXLa8D4byasKhQSMda7gvckwP0xEhITKNgSsZDttwXZSgcfKI9m/BNKQQFXY7yQwdUZkHX+NA2+fa6tHmjEBcMrREhGU6nkt/niUswIO4AETZAwjfEWoLp1XXms=</DP><DQ>MdMSWgNwjdMSdR/zS5r7fSzSkYzwyt/9/+kzPBhshCrarCUOeVYV3nZEKTZDYxi9aGoD+TN+SDz4SD48D94r88G+9sMt4O4GzV3S2jvG3nmdwO7e53kI631GbOcsfz58QPIXjEtJMwb2OgxSOng+JRz8/Pd015f1Vv2os4wBr+c=</DQ><InverseQ>B3T2sybWiec2o7LtojcAT9utAWm+7YHzUcOV6aVkIM5qGT+aHavkSH/3kDrf8TH/QRruEfiVMAVSiMp376LWbVNJaXpFpUx7vpEq+JOekDah8aPu5cp7y0JG01Vy1VjbuEoieYHxxpdZC8DNodDAcgh6WNHQjGy7/zqXW4/6wo0=</InverseQ><D>Ow1+wzH08vNL6qiMIv/UwlremmJ+kcrERNCVFXK+6XWVkJ6IYq90y1JP9zHmkvWFDLK6aCTMNhigcP2cmT3FdTW+3hNl5vTuz+oJM1/J2kmvfehzwAnYKWBSG9VSfY0UVotVFN0e1NfktotoD9GyENjKwsIPyZcMs1/qKyN6cI4bzzNhyPGqh+AJm0IAFPE5OSopNVQ5vZ0AXctxCGhUOoJdfgOyEVlYJlLFM5ugTbjvIgyTUZEDDPqUvWNP7sOdjAp96PeIWDIFSFVRgQ4bQc2ozbsZfB9+zTtNuGZyd4zFQh+1gyohYSQA0dzWA1K7m1dDKQaxo1wpO5xW2VhMMQ==</D></RSAKeyValue>';

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
