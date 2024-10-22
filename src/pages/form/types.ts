type BooleanField = {
  slug: string;
  label: string;
  category: boolean;
  params: {
    required: boolean;
    help_text: string;
    default_value: boolean;
    display_format: string;
  };
};

type StringField = {
  slug: string;
  label: string;
  category: string;
  params: {
    required: boolean;
    help_text: string;
    default_value: string;
    min_length: number;
    max_length: number;
  };
};

export type Structure = (BooleanField | StringField)[]

export interface Form {
    uuid: string
    name: string
    description: string
    color: string
    shared: boolean
    dashboard_uuid: string
    structure: Structure
}