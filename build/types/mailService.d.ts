import SMTP2GOService from "./service";
import Address from "./types/address";
import { AddressCollection } from "./types/addressCollection";
import { AddressType } from "./types/addressType";
import Attachment from "./types/attachment";
import { AttachmentCollection } from "./types/attachmentCollection";
import Header from "./types/header";
import { HeaderCollection } from "./types/headerCollection";
export default class mailService extends SMTP2GOService {
    htmlBody: string;
    textBody: string;
    fromAddress: Address;
    toAddress: AddressCollection;
    ccAddress: AddressCollection;
    bccAddress: AddressCollection;
    subjectLine: string;
    templateId: string;
    templateData: JSON;
    customHeaders: HeaderCollection;
    attachments: AttachmentCollection;
    constructor();
    addAddress(address: Address, type?: AddressType): this;
    html(content: string): this;
    text(content: string): this;
    from(from: Address): this;
    to(toAddress: Address | AddressCollection): this;
    headers(header: Header | HeaderCollection): this;
    subject(subject: string): this;
    attach(attachment: Attachment | AttachmentCollection | string): this;
    getFormattedAddresses(type: AddressType): Array<string>;
    formatAddress(address: Address): string;
    buildRequestBody(): Promise<Record<string, string | boolean>>;
}
