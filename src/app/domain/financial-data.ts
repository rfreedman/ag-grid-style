import {LocalDate} from 'js-joda';
import {Big as BigDecimal} from 'big.js';

export class FinancialData {
  amount: BigDecimal;
  category: string;
  classification: string;
  grouping: string;
  line_item_description: string;
  date: LocalDate;
}
