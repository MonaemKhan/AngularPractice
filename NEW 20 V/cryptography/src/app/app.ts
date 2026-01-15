import { Component, OnInit, signal } from '@angular/core';
import { RsaService } from './service/Rsa.Service/rsa-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('RSA Encryption Tool');

  publicKeyLoaded = false;
  privateKeyLoaded = false;

  // Encryption
  plainText = '';
  encryptedText = '';

  // Decryption
  cipherText = '';
  decryptedText = '';

  // Messages
  message = '';
  messageType = '';

  constructor(private rsaService: RsaService) {}
  ngOnInit(): void {
    // Initialization if needed
    this.rsaService.loadBothKey();
    this.publicKeyLoaded = true;
    this.privateKeyLoaded = true;
  }

  onPublicKeyFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          //console.log(e.target.result);
          this.rsaService.loadPublicKey(e.target.result);
          this.publicKeyLoaded = true;
          this.showMessage('Public key loaded successfully!', 'success');
        } catch (error) {
          this.showMessage('Error loading public key: ' + error, 'error');
        }
      };
      reader.readAsText(file);
    }
  }

  onPrivateKeyFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          this.rsaService.loadPrivateKey(e.target.result);
          this.privateKeyLoaded = true;
          this.showMessage('Private key loaded successfully!', 'success');
        } catch (error) {
          this.showMessage('Error loading private key: ' + error, 'error');
        }
      };
      reader.readAsText(file);
    }
  }

  encrypt() {
    if (!this.publicKeyLoaded) {
      this.showMessage('Please load a public key first!', 'error');
      return;
    }

    if (!this.plainText.trim()) {
      this.showMessage('Please enter text to encrypt!', 'error');
      return;
    }

    try {
      this.encryptedText = this.rsaService.encrypt(this.plainText);
      this.showMessage('Text encrypted successfully!', 'success');
    } catch (error) {
      this.showMessage('Encryption error: ' + error, 'error');
    }
  }

  decrypt() {
    if (!this.privateKeyLoaded) {
      this.showMessage('Please load a private key first!', 'error');
      return;
    }

    if (!this.cipherText.trim()) {
      this.showMessage('Please enter encrypted text to decrypt!', 'error');
      return;
    }

    try {
      this.decryptedText = this.rsaService.decrypt(this.cipherText);
      this.showMessage('Text decrypted successfully!', 'success');
    } catch (error) {
      this.showMessage('Decryption error: ' + error, 'error');
    }
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.showMessage('Copied to clipboard!', 'success');
    });
  }

  useEncryptedForDecrypt() {
    this.cipherText = this.encryptedText;
    this.showMessage('Encrypted text copied to decrypt section!', 'success');
  }

  clearEncryption() {
    this.plainText = '';
    this.encryptedText = '';
  }

  clearDecryption() {
    this.cipherText = '';
    this.decryptedText = '';
  }

  showMessage(msg: string, type: string) {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}
