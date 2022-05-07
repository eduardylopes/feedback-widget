import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '8be08f7116a963',
    pass: 'd5fbf77fa53020',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <support@feedget.com',
      to: 'Eduardy Lopes de Morais <eduardy@feedget.com>',
      subject,
      html: body,
    });
  }
}
