import { PackageType, Package } from "../../interfaces/TapPlan.interface";

export const pricingWebsite: Package[] = [
  {
    price: '$3,000.-',
    packageName: PackageType.STARTER,
    details: [
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่ไม่รวมในแพคเกจ', included: false },
      { description: 'รายการบริการที่ไม่รวมในแพคเกจ', included: false },
    ],
  },
  {
    price: '$13,000.-',
    packageName: PackageType.STANDARD,
    details: [
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่ไม่รวมในแพคเกจ', included: false },
    ],
    isRecommended: true,
  },
  {
    price: '$50,000.-',
    packageName: PackageType.BUSINESS,
    details: [
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
      { description: 'รายการบริการที่รวมในแพคเกจ', included: true },
    ],
  },
];
