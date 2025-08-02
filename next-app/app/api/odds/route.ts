import { NextResponse } from 'next/server';
export const revalidate = 30; // ISR 30 s
export async function GET() {
  const url = `https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=${process.env.ODDS_API_KEY}&regions=eu&markets=h2h&oddsFormat=decimal&bookmakers=betfair,pinnacle`;
  try {
    const res = await fetch(url, { next: { revalidate: 30 } });
    if (!res.ok) return NextResponse.json({ error: 'API error' }, { status: 500 });
    const json = await res.json();
    // Simplify to first 3 events & 3 bookmakers
    const data = json.slice(0,3).map((event:any)=>({
      match: `${event.home_team} vs ${event.away_team}`,
      values: event.bookmakers.slice(0,3).reduce((acc:any,bk:any)=>{
        acc[bk.key] = bk.markets[0].outcomes[0].price; // home team odds
        return acc;
      },{})
    }));
    return NextResponse.json({ data });
  } catch(e){
    return NextResponse.json({ error:'fetch failed'},{status:500});
  }
}