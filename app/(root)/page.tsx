import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const user = { firstName: 'Yuan', lastName: 'Komah', email: 'yuankomah211@gmail.com' };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user="Guess"
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={10000.35}
          />
        </header>
      </div>
      <RightSidebar 
        user={user}
        transactions={[]}
        banks={[{}, {}]}/>
    </section>
  )
}

export default Home