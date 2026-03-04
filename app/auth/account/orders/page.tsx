'use client';

import React from 'react';
import {
  IconClock,
  IconCheck,
  IconX,
  IconPackage,
  IconFileDownload,
  IconCar,
  IconCreditCard,
  IconCash,
  IconTruck,
} from '@tabler/icons-react';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/modules/shared/components/ui/table';
import { Card } from '@/modules/shared/components/ui/card';
import { Badge } from '@/modules/shared/components/ui/badge';
import { Button } from '@/modules/shared/components/ui/button';

// --- Tipos ---
type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled';
type PaymentMethod = 'credit' | 'cash';

interface OrderItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  isDelivery?: boolean;
  image?: string;
}

const MOCK_ORDERS: OrderItem[] = [
  {
    id: 'ORD-7721',
    date: '27 ene 2026',
    title: 'Ceramic Coating',
    subtitle: 'BMW M4',
    total: 450000,
    status: 'completed',
    paymentMethod: 'credit',
    isDelivery: false,
    image: '/images/test.jpeg',
  },
  {
    id: 'ORD-8932',
    date: '28 ene 2026',
    title: 'Shampoo Ph Neutro Car Wash',
    subtitle: '1 LITRO (X2 UNIDADES)',
    total: 14000,
    status: 'processing',
    paymentMethod: 'cash',
    isDelivery: true,
    image: '/images/test.jpeg',
  },
];

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const config = {
    pending: { label: 'PENDIENTE', icon: IconClock, class: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20' },
    processing: { label: 'EN PROCESO', icon: IconPackage, class: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20' },
    completed: { label: 'FINALIZADO', icon: IconCheck, class: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' },
    cancelled: { label: 'CANCELADO', icon: IconX, class: 'bg-zinc-100 text-zinc-500' },
  };
  const { label, icon: Icon, class: className } = config[status];
  return (
    <Badge
      className={`${className} flex items-center gap-1.5 border-none px-2 py-0.5 text-[10px] font-bold tracking-widest shadow-none`}
    >
      <Icon size={12} stroke={3} /> {label}
    </Badge>
  );
};

export default function OrdersPage() {
  return (
    <div className="animate-in fade-in mx-auto max-w-6xl space-y-8 px-4 py-6 duration-500">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Mis Pedidos</h1>
        <p className="text-sm text-zinc-500">Historial detallado de tus transacciones en Clean Pro.</p>
      </header>

      <Card className="overflow-hidden rounded-2xl border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <Table>
          <TableHeader className="border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-6 py-5 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Pedido
              </TableHead>
              <TableHead className="py-5 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Información
              </TableHead>
              <TableHead className="py-5 text-center text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Fecha
              </TableHead>
              <TableHead className="py-5 text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Pago</TableHead>
              <TableHead className="py-5 text-center text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Estado
              </TableHead>
              <TableHead className="py-5 text-right text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Monto
              </TableHead>
              <TableHead className="px-6 py-5 text-center text-right text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                Boleta
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_ORDERS.map((order) => (
              <TableRow
                key={order.id}
                className="group border-b border-zinc-50 transition-all last:border-0 hover:bg-zinc-50/40 dark:border-zinc-900"
              >
                {/* ID */}
                <TableCell className="px-6 py-6 font-semibold text-zinc-900 dark:text-zinc-300">
                  <span className="mr-0.5 font-normal text-zinc-400">#</span>
                  {order.id.split('-')[1]}
                </TableCell>

                {/* Información */}
                <TableCell className="py-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800">
                      {order.image ? (
                        <Image src={order.image} alt={order.title} fill className="object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-zinc-50 text-zinc-400">
                          <IconCar size={20} />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm leading-none font-bold text-zinc-800 dark:text-zinc-100">
                        {order.title}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold tracking-tighter text-zinc-500 uppercase">
                          {order.subtitle}
                        </span>
                        {order.isDelivery && (
                          <div className="flex items-center gap-1 text-[9px] font-semibold tracking-[0.1em] text-blue-600 uppercase">
                            <IconTruck size={12} stroke={3} /> Delivery a domicilio
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </TableCell>

                {/* Fecha Separada */}
                <TableCell className="text-center">
                  <span className="text-xs font-medium text-zinc-500">{order.date}</span>
                </TableCell>

                {/* Pago Separado */}
                <TableCell>
                  <div className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                    {order.paymentMethod === 'credit' ? (
                      <>
                        <IconCreditCard size={16} className="text-zinc-400" />{' '}
                        <span className="text-xs font-semibold">Tarjeta</span>
                      </>
                    ) : (
                      <>
                        <IconCash size={16} className="text-zinc-400" />{' '}
                        <span className="text-xs font-semibold">Efectivo</span>
                      </>
                    )}
                  </div>
                </TableCell>

                {/* Estado */}
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <StatusBadge status={order.status} />
                  </div>
                </TableCell>

                {/* Monto */}
                <TableCell className="px-2 text-right text-[15px] font-black whitespace-nowrap text-zinc-900 dark:text-zinc-100">
                  ${order.total.toLocaleString('es-CL')}
                </TableCell>

                {/* Boleta */}
                <TableCell className="px-6 text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-zinc-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
                  >
                    <IconFileDownload size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
