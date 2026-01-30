export interface Product {
    title      : string;
   price       : number;
   description : string;
   stock       : number;
   slug        : string;
   images      : string[];
   category    : 'exterior-care' | 'pants' | 'hoodies' | 'hats';
}