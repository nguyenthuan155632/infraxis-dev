import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { PriceService } from './../../../../services/price.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() infra: string;
  @Input() isFull: boolean = false;
  infraCoin: string;
  imgWidth: number = 120;
  spotFontSize: number = 50;
  descFontSize: number = 16;

  spot_price: string;
  buy_price: string;
  sell_price: string;
  exchange_price: string;

  spotSubscription: Subscription;
  buySubscription: Subscription;
  sellSubscription: Subscription;
  exchangeSubscription: Subscription;
  
  spotSubscriptionInterval: Subscription;
  buySubscriptionInterval: Subscription;
  sellSubscriptionInterval: Subscription;
  exchangeSubscriptionInterval: Subscription;

  constructor(private priceService: PriceService) { }

  ngOnInit() {

    switch(this.infra) {
      case 'bitcoin':
          this.infraCoin = 'BTC'
          break;
      case 'ethereum':
          this.infraCoin = 'ETH'
          break;
      case 'ripple':
          this.infraCoin = 'XRP'
          break;
      default:
          this.infraCoin = 'BTC'
    }

    // Spot Price
    this.spotSubscription = this.priceService.getPrice('https://api.coinbase.com/v2/prices/' + this.infraCoin + '-USD/spot')
                                    .subscribe(res => { this.spot_price = '$' + res.data.amount; });
    
    // Buy Price
    this.buySubscription = this.priceService.getPrice('https://api.coinbase.com/v2/prices/' + this.infraCoin + '-USD/buy')
                                    .subscribe(res => { this.buy_price = 'BUY: $' + res.data.amount; });

    // Sell Price
    this.sellSubscription = this.priceService.getPrice('https://api.coinbase.com/v2/prices/' + this.infraCoin + '-USD/sell')
                                    .subscribe(res => { this.sell_price = 'SELL: $' + res.data.amount; });


    // Exchange Price
    this.exchangeSubscription = this.priceService.getPrice('https://api.coinbase.com/v2/exchange-rates?currency=' + this.infraCoin)
                                    .subscribe(res => { 
                                      this.exchange_price = 'EXCHANGE: $' + res.data.rates.USD; 
                                    });

    // Spot Price
    this.spotSubscriptionInterval = this.priceService.getPriceInterval('https://api.coinbase.com/v2/prices/' + this.infraCoin + '-USD/spot', 5000)
                        .subscribe(res => { 
                          this.spot_price = '$' + res.data.amount;
                        });

    // Buy Price
    this.buySubscriptionInterval = this.priceService.getPriceInterval('https://api.coinbase.com/v2/prices/' + this.infraCoin + '-USD/buy', 5000)
                        .subscribe(res => { 
                          this.buy_price = 'BUY: $' + res.data.amount;
                        });

    // Sell Price
    this.sellSubscriptionInterval = this.priceService.getPriceInterval('https://api.coinbase.com/v2/prices/' + this.infraCoin + '-USD/sell', 5000)
                        .subscribe(res => { 
                          this.sell_price = 'SELL: $' + res.data.amount;
                        });

    // Exchange Price
    this.exchangeSubscriptionInterval = this.priceService.getPriceInterval('https://api.coinbase.com/v2/exchange-rates?currency=' + this.infraCoin, 5000)
                        .subscribe(res => { 
                          this.exchange_price = 'EXCHANGE: $' + res.data.rates.USD;
                        });


    // Styles
    if(this.isFull && window.innerWidth > 480) {
      this.imgWidth = 240;
      this.spotFontSize = 80;
      this.descFontSize = 24;
    }
  }

  ngAfterViewInit() {
    
  }

  ngOnDestroy() {
    this.spotSubscription .unsubscribe();
    this.spotSubscriptionInterval.unsubscribe();

    this.buySubscription .unsubscribe();
    this.buySubscriptionInterval.unsubscribe();

    this.sellSubscription .unsubscribe();
    this.sellSubscriptionInterval.unsubscribe();

    this.exchangeSubscription .unsubscribe();
    this.exchangeSubscriptionInterval.unsubscribe();
  }

}
