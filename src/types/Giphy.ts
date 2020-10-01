export interface IGiphyItem {
  images: {
    fixed_width_downsampled: {
      webp: string,
      url: string,
    },
    original: {
      webp: string,
      url: string,
    }
  };
  id: string;
  title: string;
  source: string;
  user?: {
    avatar_url: string;
    display_name: string;
    username: string;
  };
}

export interface IGiphyPagination {
  count: number;
  offset: number;
  total_count: number;
}

export interface IGiphyDetailsResponse {
  data: IGiphyItem;
}

export interface IGiphyListResponse {
  data: IGiphyItem[];
  pagination: IGiphyPagination;
}
