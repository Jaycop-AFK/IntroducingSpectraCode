export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  export enum PackageType {
    STARTER = 'STARTER',
    STANDARD = 'STANDARD',
    BUSINESS = 'BUSINESS',
  }
  
  export interface PackageDetail {
    description: string;
    included: boolean; // True สำหรับฟีเจอร์ที่มีอยู่ในแพ็คเกจ, False สำหรับฟีเจอร์ที่ไม่มี
  }
  
  export interface Package {
    price: string;
    packageName: PackageType;
    details: PackageDetail[];
    isRecommended?: boolean; // เพิ่ม optional property สำหรับแนะนำแพ็คเกจ
  }
  
  export interface Props {
    packages: Package[];
  }