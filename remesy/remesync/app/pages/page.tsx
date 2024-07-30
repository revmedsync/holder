'use client';
import { OramaCloud, useSearch } from '@oramacloud/client/react'
import { SearchComponent } from './api/orama';


export default function Home() {
  
  return (
    <div className='flex bg-stone-700 h-[650px] flex-col justify-center items-center'>
      <OramaCloud
          endpoint='https://cloud.orama.run/v1/indexes/www-revmedsync-com-i0b69o'
          apiKey='ikM9Lc4NjXSWaHJncGSpM7E3TZZmeaTF'>
        <SearchComponent/>
      </OramaCloud>
      
    </div>
  );
}
