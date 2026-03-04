'use client';

import {
  Users,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  UserPlus,
  Activity,
  Server,
  ShieldCheck,
  Download,
} from 'lucide-react';
import { Button } from '@/modules/shared/components/ui';

// Datos simulados para la lista de actividad
const recentUsers = [
  {
    id: 1,
    name: 'Lucas García',
    email: 'lucas@example.com',
    role: 'User',
    date: 'Hace 2 min',
  },
  {
    id: 2,
    name: 'Ana Smith',
    email: 'ana.s@example.com',
    role: 'User',
    date: 'Hace 15 min',
  },
  {
    id: 3,
    name: 'Marcos Reus',
    email: 'reus.m@example.com',
    role: 'Admin',
    date: 'Hace 1 hora',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6 bg-slate-50/50 min-h-screen">
      {/* Encabezado Principal */}
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">
            Panel de Control
          </h2>
          <p className="text-sm text-slate-500">
            Bienvenido de vuelta, Benjamín.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar Reporte
          </Button>
        </div>
      </div>

      {/* 1. Fila de Tarjetas KPI (Métricas Principales) */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardKpi
          title="Usuarios Totales"
          value="1,250"
          icon={<Users className="h-4 w-4 text-blue-500" />}
          description="+12% desde el mes pasado"
          trend="up"
        />
        <CardKpi
          title="Ventas Totales"
          value="$45,231"
          icon={<DollarSign className="h-4 w-4 text-emerald-500" />}
          description="+20.1% desde el mes pasado"
          trend="up"
        />
        <CardKpi
          title="Productos"
          value="452"
          icon={<ShoppingBag className="h-4 w-4 text-orange-500" />}
          description="12 nuevos esta semana"
        />
        <CardKpi
          title="Sesiones Activas"
          value="+573"
          icon={<Activity className="h-4 w-4 text-purple-500" />}
          description="+201 en la última hora"
          trend="up"
        />
      </div>

      {/* 2. Sección Central: Gráfico y Actividad */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Simulación Realista de Gráfico de Ventas */}
        <div className="col-span-4 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-slate-700">
                Resumen de Ventas
              </h3>
              <p className="text-xs text-slate-400">
                Ingresos proyectados vs reales
              </p>
            </div>
            <SelectPeriod />
          </div>

          {/* Contenedor del Gráfico Simulado */}
          <div className="relative h-[250px] w-full flex items-end justify-between px-2 pt-10">
            {/* Barras de fondo para simular cuadrícula */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="border-t border-slate-900 w-full" />
              ))}
            </div>

            {/* Barras de datos simuladas con Tailwind animado */}
            {[40, 70, 55, 90, 65, 80, 95, 70, 85, 60, 75, 90].map(
              (height, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col items-center w-full"
                >
                  <div
                    className="w-4 bg-blue-500/20 rounded-t-sm transition-all duration-500 hover:bg-blue-600/80 cursor-pointer"
                    style={{ height: `${height}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${(height * 120).toLocaleString()}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 font-medium">
                    {
                      [
                        'E',
                        'F',
                        'M',
                        'A',
                        'M',
                        'J',
                        'J',
                        'A',
                        'S',
                        'O',
                        'N',
                        'D',
                      ][i]
                    }
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Últimos Registros */}
        <div className="col-span-3 rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-slate-700">
              Registros Recientes
            </h3>
            <UserPlus className="h-4 w-4 text-slate-400" />
          </div>
          <div className="space-y-6">
            {recentUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center group cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors"
              >
                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                  {user.name.charAt(0)}
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user.name}
                  </p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
                <div className="ml-auto text-xs font-medium text-slate-400">
                  {user.date}
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            className="w-full mt-6 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium"
          >
            Ver todos los usuarios
          </Button>
        </div>
      </div>

      {/* 3. NUEVO MÓDULO: Estado de la Infraestructura */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatusCard
          title="Estado del Servidor"
          status="Operacional"
          detail="Latencia: 24ms"
          icon={<Server className="h-5 w-5 text-emerald-500" />}
          dotColor="bg-emerald-500"
        />
        <StatusCard
          title="Seguridad"
          status="Protegido"
          detail="SSL Activo - Firewall OK"
          icon={<ShieldCheck className="h-5 w-5 text-blue-500" />}
          dotColor="bg-blue-500"
        />
        <StatusCard
          title="API de Pagos"
          status="Estable"
          detail="Uptime: 99.99%"
          icon={<Activity className="h-5 w-5 text-purple-500" />}
          dotColor="bg-purple-500"
        />
      </div>
    </div>
  );
}

// --- Sub-componentes Reutilizables ---

function CardKpi({ title, value, icon, description, trend }: any) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md border-b-4 border-b-transparent hover:border-b-blue-500">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-slate-600">{title}</h3>
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        <p
          className={`text-[10px] mt-1 font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-slate-500'}`}
        >
          {trend === 'up' && '↑ '} {description}
        </p>
      </div>
    </div>
  );
}

function StatusCard({ title, status, detail, icon, dotColor }: any) {
  return (
    <div className="flex items-center p-4 bg-white border rounded-xl shadow-sm">
      <div className="p-3 bg-slate-50 rounded-full mr-4">{icon}</div>
      <div className="flex-1">
        <p className="text-xs font-medium text-slate-500">{title}</p>
        <div className="flex items-center space-x-2">
          <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
          <span className="text-sm font-bold text-slate-800">{status}</span>
        </div>
        <p className="text-[10px] text-slate-400 mt-0.5">{detail}</p>
      </div>
    </div>
  );
}

function SelectPeriod() {
  return (
    <div className="flex space-x-1 bg-slate-100 p-1 rounded-md border">
      {['7D', '1M', '1A'].map((p, i) => (
        <button
          key={p}
          className={`text-[10px] px-3 py-1 rounded transition-all ${i === 1 ? 'bg-white shadow-sm font-bold text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
