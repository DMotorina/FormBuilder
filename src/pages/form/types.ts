export interface Form {
    uuid: string
    name: string
    description: string
    color: string
    shared: boolean
    dashboard_uuid: string
    structure: Array<{
      slug: string;
      label: string;
      category: string;
      params: {
        required: boolean;
        help_text: string;
        default_value: any;
        display_format?: string;
        min_length?: number;
        max_length?: number;
      };
    }>;
}