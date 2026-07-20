/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  label: string;
  tag: string;
}
