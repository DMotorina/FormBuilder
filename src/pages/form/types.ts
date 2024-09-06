export interface Form {
    uuid: string
    name: string
    description: string
    color: string
    is_active: boolean
    dashboard_uuid: string
    structure: [
    {
      slug: string
      label: string
      category: boolean
      params: {
        required: boolean
        help_text: string
        default_value: boolean
        display_format: string
      }
    },
    {
      slug: string
      label: string
      category: string
      params: {
        required: boolean
        help_text: string
        default_value: string
        min_length: number
        max_length: number
      }
    },
    {
      slug: string
      label: string
      category: string
      params: {
        required: boolean
        help_text: string
        default_value: string
        min_length: number
        max_length: number
      }
    }
  ]
}