﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_40
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// База_Данных.
    /// </summary>
    // *** Start programmer edit section *** (База_Данных CustomAttributes)

    // *** End programmer edit section *** (База_Данных CustomAttributes)
    [AutoAltered()]
    [Caption("База Данных")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("База_ДанныхE", new string[] {
            "НомерКарты as \'Номер Карты\'",
            "СправУч as \'Ученик\'",
            "СправУч.Фио as \'Фио Ученика\'"})]
    [MasterViewDefineAttribute("База_ДанныхE", "СправУч", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фио Ученика")]
    public class База_Данных : ICSSoft.STORMNET.DataObject
    {
        
        private string fНомерКарты;
        
        private IIS.Prilozhenie_40.СправУч fСправУч;
        
        private IIS.Prilozhenie_40.КартДоступ fКартДоступ;
        
        // *** Start programmer edit section *** (База_Данных CustomMembers)

        // *** End programmer edit section *** (База_Данных CustomMembers)

        
        /// <summary>
        /// НомерКарты.
        /// </summary>
        // *** Start programmer edit section *** (База_Данных.НомерКарты CustomAttributes)

        // *** End programmer edit section *** (База_Данных.НомерКарты CustomAttributes)
        [StrLen(255)]
        public virtual string НомерКарты
        {
            get
            {
                // *** Start programmer edit section *** (База_Данных.НомерКарты Get start)

                // *** End programmer edit section *** (База_Данных.НомерКарты Get start)
                string result = this.fНомерКарты;
                // *** Start programmer edit section *** (База_Данных.НомерКарты Get end)

                // *** End programmer edit section *** (База_Данных.НомерКарты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (База_Данных.НомерКарты Set start)

                // *** End programmer edit section *** (База_Данных.НомерКарты Set start)
                this.fНомерКарты = value;
                // *** Start programmer edit section *** (База_Данных.НомерКарты Set end)

                // *** End programmer edit section *** (База_Данных.НомерКарты Set end)
            }
        }
        
        /// <summary>
        /// База_Данных.
        /// </summary>
        // *** Start programmer edit section *** (База_Данных.СправУч CustomAttributes)

        // *** End programmer edit section *** (База_Данных.СправУч CustomAttributes)
        [PropertyStorage(new string[] {
                "СправУч"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_40.СправУч СправУч
        {
            get
            {
                // *** Start programmer edit section *** (База_Данных.СправУч Get start)

                // *** End programmer edit section *** (База_Данных.СправУч Get start)
                IIS.Prilozhenie_40.СправУч result = this.fСправУч;
                // *** Start programmer edit section *** (База_Данных.СправУч Get end)

                // *** End programmer edit section *** (База_Данных.СправУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (База_Данных.СправУч Set start)

                // *** End programmer edit section *** (База_Данных.СправУч Set start)
                this.fСправУч = value;
                // *** Start programmer edit section *** (База_Данных.СправУч Set end)

                // *** End programmer edit section *** (База_Данных.СправУч Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Prilozhenie_40.КартДоступ.
        /// </summary>
        // *** Start programmer edit section *** (База_Данных.КартДоступ CustomAttributes)

        // *** End programmer edit section *** (База_Данных.КартДоступ CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "КартДоступ"})]
        public virtual IIS.Prilozhenie_40.КартДоступ КартДоступ
        {
            get
            {
                // *** Start programmer edit section *** (База_Данных.КартДоступ Get start)

                // *** End programmer edit section *** (База_Данных.КартДоступ Get start)
                IIS.Prilozhenie_40.КартДоступ result = this.fКартДоступ;
                // *** Start programmer edit section *** (База_Данных.КартДоступ Get end)

                // *** End programmer edit section *** (База_Данных.КартДоступ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (База_Данных.КартДоступ Set start)

                // *** End programmer edit section *** (База_Данных.КартДоступ Set start)
                this.fКартДоступ = value;
                // *** Start programmer edit section *** (База_Данных.КартДоступ Set end)

                // *** End programmer edit section *** (База_Данных.КартДоступ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "База_ДанныхE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View База_ДанныхE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("База_ДанныхE", typeof(IIS.Prilozhenie_40.База_Данных));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of База_Данных.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfБаза_Данных CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfБаза_Данных CustomAttributes)
    public class DetailArrayOfБаза_Данных : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Prilozhenie_40.DetailArrayOfБаза_Данных members)

        // *** End programmer edit section *** (IIS.Prilozhenie_40.DetailArrayOfБаза_Данных members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type База_Данных by index.
        /// </summary>
        /// <summary>
        /// Adds object with type База_Данных.
        /// </summary>
        public DetailArrayOfБаза_Данных(IIS.Prilozhenie_40.КартДоступ fКартДоступ) : 
                base(typeof(База_Данных), ((ICSSoft.STORMNET.DataObject)(fКартДоступ)))
        {
        }
        
        public IIS.Prilozhenie_40.База_Данных this[int index]
        {
            get
            {
                return ((IIS.Prilozhenie_40.База_Данных)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Prilozhenie_40.База_Данных dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
