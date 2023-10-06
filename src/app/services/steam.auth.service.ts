import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Issuer } from 'openid-client';

@Injectable({
  providedIn: 'root',
})
export class SteamAuthService {
  private client: any; // openid-client'dan gelen client

  async initialize() {
    const issuer = await Issuer.discover('https://steamcommunity.com/openid'); // Steam OpenID sağlayıcısını keşfet
    this.client = new issuer.Client({
      client_id: 'YOUR_CLIENT_ID', // Steam uygulama kimliği
      redirect_uris: ['http://localhost:4200/callback'], // İzin verilen redirect URI
      response_types: ['id_token'],
    });
  }

  async getAuthorizationUrl() {
    return this.client.authorizationUrl({
      scope: 'openid', // OpenID Connect kapsamı
    });
  }

  async handleCallback(params: any) {
    const tokenSet = await this.client.callback(
      'http://localhost:4200/callback',
      params,
      { nonce: '' },
      { nonce: '' }
    );
    return tokenSet;
  }
}
