import AdditionalField from '../../model/AdditionalField';
import LineItem from './LineItem';
import FulfillmentStatus from './FulfillmentStatus';

export default interface Fulfillment {
  additionalFields?: AdditionalField[];
  readonly id?: string;
  supplierId?: string;
  lineItems: LineItem[];
  status: FulfillmentStatus;
  shippingCompany?: string;
  shippingMethod?: string;
  trackingNumber?: string;
  trackingUrls?: string[];
  shippedAt?: Date;
}
