import { useEffect, useState } from 'react';
import type { Product } from '../domain/entities/Product.entities';

export const useBannerInterval = (fetchAction: () => Promise<void> | void, data: Product[], intervalTime = 5000) => {

      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
            fetchAction();
      }, [fetchAction]);

      useEffect(() => {

            if (!data || data.length === 0) return

            const interval = setInterval(() => {
                  setCurrentIndex((prev) => (prev + 1) % data.length);
            }, intervalTime);

            return () => clearInterval(interval)

      }, [data, intervalTime]);

      return { currentProduct: data[currentIndex], currentIndex, total: data.length }

}